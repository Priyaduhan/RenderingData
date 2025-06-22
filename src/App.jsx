import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import View from "./components/AddItem";
import Navbar from "./components/Navbar";
import ViewItem from "./components/ViewItem";
import AddItem from "./components/AddItem";
function App() {
  const [datas, setDatas] = useState([
    {
      ItemName: "H&M",
      type: "Top",
      description: "Women's Cotton Regular Fit T-Shirt",
      image: "https://m.media-amazon.com/images/I/41OtpYtmp+L._SY500_.jpg",

      additionalImages: [
        "https://m.media-amazon.com/images/I/416Jg9mSCkL._SY879_.jpg",
        "https://m.media-amazon.com/images/I/51BUP7SgY4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/41OtpYtmp+L._SY879_.jpg",
      ],
    },

    {
      ItemName: "H&M",
      type: "Jeans",
      description:
        "KOTTY Women High Rise Cotton Lycra Ankle Length Skinny fit Black Solid Jeans",
      image: "https://m.media-amazon.com/images/I/91uzgI7HsSL._SY879_.jpg",
      additionalImages: [
        "https://m.media-amazon.com/images/I/91MYNAs5TjL._SY879_.jpg",
        "https://m.media-amazon.com/images/I/91yHX0JEiOL._SY879_.jpg",
        "https://m.media-amazon.com/images/I/91L6vyY20UL._SY879_.jpg",
      ],
    },
  ]);
  const [newItem, setNewItem] = useState({
    ItemName: "",
    type: "",
    description: "",
    image: "",
    additionalImages: "",
  });
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<ViewItem datas={datas} newItem={newItem} />}
        />
        <Route
          path="/add"
          element={
            <AddItem
              datas={datas}
              newItem={newItem}
              setDatas={setDatas}
              setNewItem={setNewItem}
            />
          }
        />
        <Route path="/navigation" element={<Navbar />}></Route>
      </Routes>
    </>
  );
}

export default App;
