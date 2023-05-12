import { CFormSelect } from "@coreui/react";
import React from "react";

const Category = () => {
  const categories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Historical Fiction",
    "Biography/Autobiography",
    "Self-help",
    "Travel",
    "Humor",
    "Crime",
    "Young Adult",
    "Children's",
    "Poetry",
    "Drama",
    "Action/Adventure",
    "Paranormal",
    "Western",
    "Satire",
    "Graphic Novel",
    "Cookbook",
    "Science/Popular Science",
  ];

  return (
    <div className="mt-3">
      <CFormSelect
        id="category"
        label="Category"
        aria-label="Default select example"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </CFormSelect>
    </div>
  );
};

export default Category;
