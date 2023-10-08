import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Navigation from "./components/Navigation";

const data = [
  { firstname: "John", lastname: "Doe" },
  { firstname: "Alice", lastname: "Smith" },
  { firstname: "Bob", lastname: "Johnson" },
  { firstname: "Sarah", lastname: "Williams" },
  { firstname: "Michael", lastname: "Brown" },
  { firstname: "Emily", lastname: "Davis" },
  { firstname: "David", lastname: "Lee" },
  { firstname: "Olivia", lastname: "Wilson" },
  { firstname: "James", lastname: "Miller" },
  { firstname: "Sophia", lastname: "Anderson" },
  { firstname: "William", lastname: "Martinez" },
  { firstname: "Ava", lastname: "Harris" },
  { firstname: "Joseph", lastname: "Garcia" },
  { firstname: "Nora", lastname: "Taylor" },
  { firstname: "Daniel", lastname: "Clark" },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/items" element={<ItemsList people={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
