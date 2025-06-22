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
      <div className="flex flex-wrap justify-center p-6 gap-4">
        {datas.map((item, index) => (
          <div
            key={index}
            onClick={() => handleDialogBox(item, index)}
            className="cursor-pointer bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg transition duration-200 p-3 w-[180px] flex flex-col items-center"
          >
            <img
              src={item.image}
              alt="some image"
              className="h-[150px] w-[150px] object-cover rounded-md"
            />
            <p className="mt-2 font-medium text-gray-700 text-center">
              {item.ItemName}
            </p>
          </div>
        ))}

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
