import React, { useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";

const ViewItem = ({ datas, newItem }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [card, setCard] = useState(null);

  const handleDialogBox = (item, index) => {
    setCard(item);
    setOpenDialog(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4 sm:p-6 lg:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {datas.map((item, index) => (
            <div
              key={index}
              onClick={() => handleDialogBox(item, index)}
              className="cursor-pointer bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition duration-200 p-4 w-[90%] sm:w-[180px] flex flex-col items-center"
            >
              <img
                src={item.image}
                alt="item"
                className="h-[150px] w-[150px] object-cover rounded-md"
              />
              <p className="mt-2 font-medium text-gray-700 text-center text-sm sm:text-base">
                {item.ItemName}
              </p>
            </div>
          ))}
        </div>

        {openDialog && (
          <Modal
            card={card}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        )}
      </div>
    </div>
  );
};

export default ViewItem;
