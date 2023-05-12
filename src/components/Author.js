import React from "react";
import { CFormInput } from "@coreui/react";

const Author = () => {
  return (
    <div className="mt-3">
      <CFormInput
        type="text"
        id="author"
        label="Author"
        placeholder="J. K. Rowlings"
        required
      />
    </div>
  );
};

export default Author;
