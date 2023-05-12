import { CButton, CFormInput } from "@coreui/react";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const SeriaCode = () => {
  const [seriaCode, setSeriaCode] = useState("");

  const [seriaCodesList, setSeriaCodesList] = useState([]);

  const addSeriaCode = (code) => {
    console.log(code);
    if (seriaCodesList.includes(code) || code === "") {
      alert("Wrong format or repeated");
    } else {
      setSeriaCodesList((prev) => [...prev, code.toUpperCase()]);
      setSeriaCode("");
    }
  };

  const deleteSeriaCode = (code) => {
    const newList = seriaCodesList.filter((item) => item !== code);
    setSeriaCodesList(newList);
    return;
  };

  const enterPress = (e, code) => {
    if (e.keyCode === 13) addSeriaCode(code);
    else return;
  };

  return (
    <div className="mt-3">
      <div className="flex items-end gap-3">
        <div>
          <CFormInput
            type="text"
            id="seriaCode"
            label="Seria Code"
            placeholder="B-00010"
            required
            onChange={(e) => setSeriaCode(e.target.value.toUpperCase())}
            value={seriaCode}
            onKeyDown={(e) => enterPress(e, seriaCode)}
          />
        </div>
        <CButton
          onClick={() => addSeriaCode(seriaCode)}
          type="button"
          className="w-[100px]"
        >
          Add
        </CButton>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 max-h-[150px] overflow-scroll">
        {seriaCodesList.map((code, index) => (
          <div
            className="flex bg-white rounded-lg justify-between items-center h-[30px] pr-2 hover:bg-gray-300"
            key={index}
          >
            <p className="m-0 text-gray-700 border-r bg-gray-100 rounded-l-lg w-[30px] text-[14px] h-full flex items-center justify-center">
              {index + 1}
            </p>
            <p className="m-0 text-gray-600 text-[15px] uppercase">{code}</p>
            <button onClick={() => deleteSeriaCode(code)} type="button">
              <MdDeleteForever color="darkred" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriaCode;
