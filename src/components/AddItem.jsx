import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const AddItem = ({ datas, setDatas, newItem, setNewItem }) => {
  const handleSubmitData = (e) => {
    e.preventDefault();
    setDatas([...datas, newItem]);
    // Reset form
    setNewItem({
      ItemName: "",
      type: "",
      description: "",
      image: "",
      additionalImages: "",
    });
  };

  let showMessage = () => {
    alert("item added");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <Navbar />
      <div className="flex justify-center items-center mt-6">
        <form onSubmit={handleSubmitData}>
          <div className="bg-white shadow-lg border-2 border-amber-400 w-[550px] p-6 rounded-xl space-y-4">
            {/* Item Name */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">
                Item Name:
              </label>
              <input
                type="text"
                className="h-10 border border-gray-300 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={newItem.ItemName}
                onChange={(e) =>
                  setNewItem({ ...newItem, ItemName: e.target.value })
                }
              />
            </div>

            {/* Item Type */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">
                Item Type:
              </label>
              <input
                type="text"
                className="h-10 border border-gray-300 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={newItem.type}
                onChange={(e) =>
                  setNewItem({ ...newItem, type: e.target.value })
                }
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">
                Description:
              </label>
              <textarea
                rows="3"
                className="border border-gray-300 pl-3 pt-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={newItem.description}
                onChange={(e) =>
                  setNewItem({ ...newItem, description: e.target.value })
                }
              ></textarea>
            </div>

            {/* Cover Image */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">
                Cover Image:
              </label>
              <input
                type="text"
                placeholder="Paste image URL"
                className="h-10 border border-gray-300 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={newItem.image}
                onChange={(e) =>
                  setNewItem({ ...newItem, image: e.target.value })
                }
              />
            </div>

            {/* Additional Images */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1">
                Additional Images:
              </label>
              <input
                type="text"
                placeholder="Write multiple images URL separated by ,"
                className="h-10 border border-gray-300 pl-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={newItem.additionalImages}
                onChange={(e) =>
                  setNewItem({ ...newItem, additionalImages: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                onClick={showMessage}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
