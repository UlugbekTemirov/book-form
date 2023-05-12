import { CFormSelect } from "@coreui/react";
import React from "react";

const Language = () => {
  const languages = [
    "English",
    "Uzbek",
    "Russian",
    "Korean",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Arabic",
    "Italian",
    "Portuguese",
    "Swedish",
    "Polish",
    "Danish",
    "Greek",
    "Norwegian",
    "Turkish",
    "Thai",
    "Finnish",
    "Hindi",
    "Indonesian",
    "Czech",
    "Hebrew",
    "Hungarian",
    "Romanian",
    "Vietnamese",
    "Bengali",
    "Swahili",
    "Slovak",
    "Malay",
    "Ukrainian",
    "Persian",
    "Catalan",
    "Tagalog",
    "Slovenian",
    "Irish",
    "Lithuanian",
    "Estonian",
    "Latvian",
    "Icelandic",
    "Maltese",
    "Urdu",
    "Bulgarian",
    "Albanian",
    "Croatian",
  ];

  return (
    <div className="mt-3">
      <CFormSelect
        id="language"
        label="Language"
        aria-label="Default select example"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
        Three
      </CFormSelect>
    </div>
  );
};

export default Language;
