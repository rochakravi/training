import React, { useState } from "react";
import { db } from "../firebase";

const SpringForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("books").add(book); // update
    setBook({
      title: "",
      author: "",
    });
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Spring form</p>
    </div>
  );
};

export default SpringForm;
