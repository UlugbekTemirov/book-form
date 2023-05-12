import { CFormInput } from "@coreui/react";
import React from "react";

const Price = () => {
  return (
    <div className="mt-3">
      <CFormInput
        type="number"
        id="price"
        label="Price (sum)"
        placeholder="10000"
        min={1000}
        max={5000000}
        required
      />
    </div>
  );
};

export default Price;
