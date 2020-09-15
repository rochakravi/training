import React, { useState } from "react";
import { db } from "../firebase";

const BookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("books").add(book);
    setBook({
      title: "",
      author: "",
    });
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return <p>book form</p>;
};

export default BookForm;
