import React, { useState } from "react";

export default function QuotationForm() {
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [Contents, setContents] = useState([]);

  const add = () => {
    let item = {
      content: content,
      price: price,
    };

    setContents(Contents.concat(item));
  };

  return (
    <div>
      <input name="content" onChange={(e) => setContent(e.target.value)} />
      <input name="price" onChange={(e) => setPrice(e.target.value)} />
      <button onClick={add}>Add</button>

      {Contents.map((item) => {
        console.log(item);
      })}
    </div>
  );
}
