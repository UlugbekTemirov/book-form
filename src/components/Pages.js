import { CFormInput } from "@coreui/react";
import React from "react";

const Pages = () => {
  return (
    <div className="mt-3">
      <CFormInput
        type="number"
        id="pages"
        label="Pages"
        placeholder="300"
        min={10}
        max={4000}
        required
      />
    </div>
  );
};

export default Pages;
