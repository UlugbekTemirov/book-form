import { CFormSelect } from "@coreui/react";
import React from "react";

const Audio = () => {
  const variant = ["Mavjud emas", "Mavjud"];

  return (
    <div className="mt-3">
      <CFormSelect
        id="audio"
        label="Audio CD"
        aria-label="Default select example"
      >
        {variant.map((variant) => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
        Three
      </CFormSelect>
    </div>
  );
};

export default Audio;
