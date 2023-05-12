import { CButton, CFormInput } from "@coreui/react";
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const ISBN = () => {
  const [isbn, setIsbn] = useState("");

  const [isbnList, setIsbnList] = useState([]);

  const addISBN = (code) => {
    if (isbnList.includes(code) && Number(code) === 0 && code === "") {
      alert("Wrong format");
    } else {
      setIsbnList((prev) => [...prev, code]);
      setIsbn("");
    }
  };

  const deleteIsbn = (code) => {
    const newList = isbnList.filter((item) => item !== code);
    setIsbnList(newList);
    return;
  };

  const enterPress = (e, code) => {
    if (e.keyCode === 13) addISBN(code);
    else return;
  };

  return (
    <div className="mt-3">
      <div className="flex items-end gap-3">
        <div>
          <CFormInput
            type="number"
            id="isbn"
            label="ISBN"
            placeholder="4780035370069"
            min={0}
            max={999999999999999}
            required
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
            onKeyDown={(e) => enterPress(e, isbn)}
          />
        </div>
        <CButton
          onClick={() => addISBN(isbn)}
          type="button"
          className="w-[100px]"
        >
          Add
        </CButton>
        <CButton type="button" className="w-[100px]">
          Scan
        </CButton>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-2 max-h-[150px] overflow-scroll">
        {isbnList.map((code, index) => (
          <div
            className="flex bg-white rounded-lg justify-between items-center h-[30px] pr-2 hover:bg-gray-300"
            key={index}
          >
            <p className="m-0 text-gray-700 border-r bg-gray-100 rounded-l-lg w-[30px] text-[14px] h-full flex items-center justify-center">
              {index + 1}
            </p>
            <p className="m-0 text-gray-600 text-[15px]">{code}</p>
            <button onClick={() => deleteIsbn(code)} type="button">
              <MdDeleteForever color="darkred" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ISBN;
