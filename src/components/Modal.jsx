import React, { useRef } from "react";
import Carousel from "./Carousel";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ card, openDialog, setOpenDialog }) => {
  const modalRef = useRef();

  const closeDialog = (e) => {
    if (modalRef.current === e.target) {
      setOpenDialog(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4"
      ref={modalRef}
      onClick={closeDialog}
    >
      <div className="bg-white text-gray-800 rounded-xl shadow-2xl w-full max-w-xl min-h-[460px] p-4 sm:p-6 relative">
        {/* Close Button */}
        <RxCross2
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 hover:cursor-pointer text-2xl sm:text-3xl"
          onClick={() => setOpenDialog(false)}
        />

        {/* Carousel */}
        <div className="h-[260px] sm:h-[340px] mt-6">
          <Carousel additionalImages={card.additionalImages} />
        </div>

        {/* Content */}
        <div className="text-center mt-4 px-2 sm:px-6">
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-indigo-700 mb-2">
            {card.type}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            {card.description}
          </p>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition hover:cursor-pointer">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
