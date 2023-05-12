import { CForm, CFormInput } from "@coreui/react";
import React from "react";

const BookName = () => {
  return (
    <CFormInput
      type="text"
      id="bookName"
      label="Book Name"
      placeholder="Harry Potter"
      aria-describedby="exampleFormControlInputHelpInline"
      required
    />
  );
};

export default BookName;
