import React, { useRef } from "react";
import Carousel from "./Carousel";

const Modal = ({ card, openDialog, setOpenDialog }) => {
  const modalRef = useRef();

  const closeDialog = (e) => {
    if (modalRef.current === e.target) {
      setOpenDialog(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center"
      ref={modalRef}
      onClick={closeDialog}
    >
      <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 w-[600px] max-w-[95%] h-[500px] flex flex-col justify-between relative">
        {/* Carousel */}
        <div className="h-[340px] px-4 relative z-10">
          <Carousel additionalImages={card.additionalImages} />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center mt-2 px-4">
          <h1 className="text-2xl font-bold font-serif text-indigo-700 mb-2">
            {card.type}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{card.description}</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
