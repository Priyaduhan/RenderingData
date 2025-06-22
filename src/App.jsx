import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import View from "./components/AddItem";
import Navbar from "./components/Navbar";
import ViewItem from "./components/ViewItem";
import AddItem from "./components/AddItem";
function App() {
  const [datas, setDatas] = useState(() => {
    const stored = localStorage.getItem("itemData");
    return stored
      ? JSON.parse(stored)
      : [
          {
            ItemName: "H&M",
            type: "Top",
            description: "Women's Cotton Regular Fit T-Shirt",
            image:
              "https://m.media-amazon.com/images/I/41OtpYtmp+L._SY500_.jpg",

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
            image:
              "https://m.media-amazon.com/images/I/91uzgI7HsSL._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/91MYNAs5TjL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/91yHX0JEiOL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/91L6vyY20UL._SY879_.jpg",
            ],
          },
          {
            ItemName: "Max",
            type: "Women Top",
            description: "Max Women Solid T-Shirt",
            image:
              "https://m.media-amazon.com/images/I/51udHUVAf2L._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/61VAdvqckjL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/61zZrhvjtML._SY879_.jpg",
              "https://m.media-amazon.com/images/I/519bdUyv+KL._SY879_.jpg",
            ],
          },
          {
            ItemName: "LITZO",
            type: "Top for Women",
            description:
              "Regular Fit Western Latest Stylish Office Wear Tops Women ",
            image:
              "https://m.media-amazon.com/images/I/712xN2ayisL._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/71C4F4Ze9ML._SY879_.jpg",
              "https://m.media-amazon.com/images/I/81-1Wm1+oAL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/71sYSrTyGsL._SY879_.jpg",
            ],
          },
          {
            ItemName: "TOPLOT",
            type: "Stripped Top",
            description:
              "TOPLOT Stripe Printed Short Sleeve Regular Fit Top for Women ",
            image:
              "https://m.media-amazon.com/images/I/71ONzryY9SL._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/71v5zwuZ0zL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/71Es1PaNM+L._SY879_.jpg",
              "https://m.media-amazon.com/images/I/61j1gVsOziL._SY879_.jpg",
            ],
          },
          {
            ItemName: "LITZO",
            type: "Cargo Pants",
            description:
              "LITZO Cotton Cargo Pants for Women || Womens Cargo Pant ",
            image:
              "https://m.media-amazon.com/images/I/61RauFzg7RL._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/81dBaSCMaqL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/811d+Uz6VvL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/61RauFzg7RL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/81ZRFnmVGnL._SY879_.jpg",
            ],
          },
          {
            ItemName: "BlissClub",
            type: "women Pants",
            description:
              "Ultimate Straight Pants Trousers for Women with High Waist, Formal Pant for Women Office Wear with Wide Waistband ",
            image:
              "https://m.media-amazon.com/images/I/41I8iCjpFWL._SX679_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/41Dr6xSn2+L._SX679_.jpg",
              "https://m.media-amazon.com/images/I/41cKG-QzmSL.jpg",
              "https://m.media-amazon.com/images/I/418+LMVzoeL._SX679_.jpg",
            ],
          },
          {
            ItemName: "GRECIILOOKS",
            type: "Women Pants",
            description:
              "High Waist Cotton Trousers for Women – Flared Parachute Pants with Side Pockets | Casual Travel Cargo Pants (Available in Plus Size) ",
            image:
              "https://m.media-amazon.com/images/I/61sQZcZtz5L._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/71ewrsnhwHL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/81TtwEA1LuL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/61sQZcZtz5L._SY879_.jpg",
              "https://m.media-amazon.com/images/I/71pyRpR5NuL._SY879_.jpg",
            ],
          },
          {
            ItemName: "LOUIS LUXE",
            type: "Loose Jeans",
            description:
              "  These Women’s Cargo Jeans are baggy bootcut denim jeans with functional pockets, crafted from a premium blend of cotton and Lycra fabric, offering a perfect balance of style and comfort.",
            image:
              "https://m.media-amazon.com/images/I/71gIr8N3LZL._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/71u15lus2TL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/81w4Se7cP9L._SY879_.jpg",
              "https://m.media-amazon.com/images/I/71+qYfWDrqL._SY879_.jpg",
            ],
          },
          {
            ItemName: " Symbol",
            type: "Jeans",
            description:
              "High-rise, ankle-length, skinny-fit jeans featuring a classic five-pocket design and a zip fly with button closure. ",
            image:
              "https://m.media-amazon.com/images/I/71VwkZdjRoL._SY879_.jpg",
            additionalImages: [
              "https://m.media-amazon.com/images/I/91GNfE+DZVL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/91Lm3SH7jeL._SY879_.jpg",
              "https://m.media-amazon.com/images/I/71R6BamqlgS._SY879_.jpg",
            ],
          },
        ];
  });
  useEffect(() => {
    localStorage.setItem("itemData", JSON.stringify(datas));
  }, [datas]);

  const [newItem, setNewItem] = useState({
    ItemName: "",
    type: "",
    description: " ",
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
