import { CFormInput } from "@coreui/react";
import React from "react";

const EBook = () => {
  return (
    <div className="mt-3">
      <CFormInput
        type="file"
        id="file"
        label="E-version Book"
        placeholder="Select ebook"
        accept=".pdf,.doc,.docx"
      />
    </div>
  );
};

export default EBook;
