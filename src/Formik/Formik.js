import React from "react";
import BookName from "../components/BookName";
import Author from "../components/Author";
import Year from "../components/Year";
import Language from "../components/Language";
import Pages from "../components/Pages";
import Audio from "../components/Audio";
import Category from "../components/Category";
import Price from "../components/Price";
import EBook from "../components/EBook";
import ISBN from "../components/ISBN";
import SeriaCode from "../components/SeriaCode";

const Formik = () => {
  return (
    <div className="wrapper">
      <BookName />
      <Author />
      <div className="grid grid-cols-2 gap-3 items-center">
        <Year />
        <Language />
      </div>
      <div className="grid grid-cols-2 gap-3 items-center">
        <Pages />
        <Audio />
      </div>
      <div className="grid grid-cols-2 gap-3 items-center">
        <Price />
        <Category />
      </div>
      <EBook />
      <ISBN />
      <SeriaCode />
    </div>
  );
};

export default Formik;
