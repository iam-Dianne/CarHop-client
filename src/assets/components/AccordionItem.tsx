import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

type itemtypes = {
  title: string;
  content: string;
};

const AccordionItem = ({ title, content }: itemtypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-1 px-2 border-b border-gray-900/20">
      <button
        type="button"
        onClick={toggleAccordion}
        className="w-full text-left text-lg xl:text-xl font-bold focus:outline-none py-2 flex items-center justify-between"
      >
        <div>{title}</div>
        <div>
          {!isOpen ? (
            <RiArrowDropDownLine className="text-3xl text-primary" />
          ) : (
            <RiArrowDropUpLine className="text-3xl text-primary" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
