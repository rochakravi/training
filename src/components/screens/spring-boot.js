import React, { useState, useEffect } from "react";
import { db } from "../firebase";

const SpringBoot = () => {
  const [books, setBooks] = useState([]);

  // add
  useEffect(() => {
    console.log("effect");
    const unsub = db.collection("books").onSnapshot((snapshot) => {
      const allBooks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBooks(allBooks);
    });
    return () => {
      console.log("cleanup");
      unsub();
    };
  }, []);

  // add
  const deleteBook = (id) => {
    db.collection("books").doc(id).delete();
  };

  return (
    <div className="section section-books">
      <div className="container">
        <h6>Books</h6>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div className="card book">
                <div className="book-image">
                  <img src={bookThumb} alt="book thumb" />
                </div>
                <div className="book-details">
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">{book.author}</div>
                </div>
                <div
                  onClick={() => deleteBook(book.id)}
                  className="book-delete"
                  style={{ cursor: "pointer" }} // add
                >
                  <i className="material-icons">delete</i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpringBoot;
