import React from "react";
import { CFormInput } from "@coreui/react";

const Year = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-3">
      <CFormInput
        type="number"
        id="year"
        label="Year"
        placeholder="1991"
        min={1800}
        max={year}
        required
      />
    </div>
  );
};

export default Year;
