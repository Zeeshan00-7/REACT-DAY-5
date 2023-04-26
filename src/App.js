import React from "react";
import Cards from "./components/Card";
import './App.css';

export default function App() {

  
  
  const productDetails = [
    {
      id: 1,
      name: 'Shoes',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      price: "$140",
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: "Add To Card",
      
    },
    {
      id: 2,
      name: 'Speaker',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      price: "Price: $210",
      image: "https://images.pexels.com/photos/12715497/pexels-photo-12715497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: "Add To Card"
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: "Price: $300",
      image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      button: "Add To Card"
    },
  ];

  return (
    <div className='App'>
      {productDetails.map((product) => (
        <Cards key={product.id} product={product} />
      ))}
    </div>
  );
}