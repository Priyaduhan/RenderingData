import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const AddItem = ({ datas, setDatas }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitValid = (data) => {
    const additionalImagesArray = data.additionalImages
      .split(",")
      .map((url) => url.trim());

    const newEntry = {
      ItemName: data.Item_Name,
      type: data.type,
      description: data.description,
      image: data.image,
      additionalImages: additionalImagesArray,
    };

    const updatedData = [...datas, newEntry];
    setDatas(updatedData);

    // Save to localStorage
    localStorage.setItem("itemData", JSON.stringify(updatedData));

    alert("Item added");
    reset();
  };

  const onSubmitInvalid = () => {
    alert("Fill details correctly");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <Navbar />
      <div className="flex justify-center items-center mt-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <form
          onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
          className="w-full sm:w-[95%] md:w-[80%] lg:w-[600px]"
        >
          <div className="bg-white shadow-lg border-2 border-amber-400 p-4 sm:p-6 rounded-xl space-y-4">
            {/* Item Name */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1 text-base sm:text-[15px]">
                Item Name:
              </label>
              <input
                {...register("Item_Name", {
                  required: "Item Name is required",
                  minLength: {
                    value: 3,
                    message: "Item Name must be at least 3 characters",
                  },
                })}
                type="text"
                className="h-10 border border-gray-300 pl-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.Item_Name && (
                <p className="text-red-500 text-sm">
                  {errors.Item_Name.message}
                </p>
              )}
            </div>

            {/* Item Type */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1 text-base sm:text-[15px]">
                Item Type:
              </label>
              <input
                {...register("type", {
                  required: "Item type is required",
                  minLength: {
                    value: 3,
                    message: "Item type must be at least 3 characters",
                  },
                })}
                type="text"
                className="h-10 border border-gray-300 pl-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1 text-base sm:text-[15px]">
                Description:
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters long",
                  },
                  maxLength: {
                    value: 500,
                    message: "Maximum 500 characters allowed",
                  },
                })}
                rows="3"
                className="border border-gray-300 pl-3 pt-2 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Cover Image */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1 text-base sm:text-[15px]">
                Cover Image:
              </label>
              <input
                {...register("image", {
                  required: "Cover image is required",
                  pattern: {
                    value: /^https?:\/\/.*/i,
                    message: "Image URL must start with http or https",
                  },
                })}
                type="text"
                placeholder="Paste image URL"
                className="h-10 border border-gray-300 pl-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>

            {/* Additional Images */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-1 text-base sm:text-[15px]">
                Additional Images:
              </label>
              <input
                {...register("additionalImages", {
                  required: "At least 3 image URLs are required",
                  validate: (value) => {
                    const urls = value.split(",").map((url) => url.trim());
                    const isMinimum = urls.length >= 3;
                    const isValid = urls.every((url) =>
                      /^https?:\/\/.*/i.test(url)
                    );
                    if (!isMinimum) return "Please enter at least 3 image URLs";
                    if (!isValid)
                      return "All URLs must start with http or https";
                    return true;
                  },
                })}
                type="text"
                placeholder="Enter 3+ image URLs separated by commas"
                className="h-10 border border-gray-300 pl-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {errors.additionalImages && (
                <p className="text-red-500 text-sm">
                  {errors.additionalImages.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-200 text-sm sm:text-base"
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
