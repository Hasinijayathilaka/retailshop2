// Women products images
import Frock1 from "../assets/Frock1.jpg";
import Jeans from "../assets/Jeans.jpg";
import Blouse from "../assets/Blouse.png";
import TShirt from "../assets/T-Shirt.png";

// Men products images
import JacketMen from "../assets/Jacket.jpg";
import CasualShirt from "../assets/shirt.jpg";
import sweatshirts from "../assets/sweatshirts.jpg";
import Blazers from "../assets/Blazers.jpg";



// Accessories images

import Necklaces from "../assets/necklaces.png";
import Watches from "../assets/watches.png";
import Belt from "../assets/Belt.png";
import ee from "../assets/ee.png";


// Sale products images
import Dress from "../assets/Dress.png";
import WJeans from "../assets/wJeans.jpg";
import JacketSale from "../assets/Jackete.jpg";

// ----------------- PRODUCTS -----------------

export const womenProducts = [
  { id: 1, name: "Frock", price: 900, oldPrice: 1500, image: Frock1, rating: 4.5 ,  },
  { id: 2, name: "Jeans", price: 1000, oldPrice: 1200, image: Jeans, rating: 4.0 },
  { id: 3, name: "Blouse", price: 400, oldPrice: 600, image: Blouse, rating: 4.7 },
  { id: 4, name: "T-Shirt", price: 800, oldPrice: 900, image: TShirt, rating: 4.2 },
];

export const menProducts = [
  { id: 101, name: "Jacket", price: 1800, oldPrice: 2000, image: JacketMen, rating: 4.6 },
  { id: 102, name: "Casual Polo Shirt", price: 2000, oldPrice: 2500, image: CasualShirt, rating: 4.3 },
  {id: 103, name: "sweatshirts", price:1500, oldPrice: 1000, image: sweatshirts, rating: 3},
  {id: 104, name: "Blazers", price: 4500, oldPrice: 5000, image: Blazers, rating: 4},
  
];

export const accessoriesProducts = [

  { id: 202, name: "Necklaces", price: 10000, oldPrice: 15000, image: Necklaces, rating: 4.6 },
  { id: 203, name: "Watches", price: 10000, oldPrice: 11000, image: Watches, rating: 4.7 },
  { id: 204, name: "Leather Belt", price: 800, oldPrice: 1000, image: Belt, rating: 4.5 },
{ id: 205, name: "Earrings", price: 300, oldPrice: 500, image: ee, rating: 5 },

];

export const saleProducts = [
  { id: 301, name: "Dress", price: 2999, oldPrice: 3999, image: Dress, rating: 4.5 },
  { id: 302, name: "Jeans", price: 3499, oldPrice: 4999, image: WJeans, rating: 3 },
  { id: 303, name: "Jacket", price: 5999, oldPrice: 7999, image: JacketSale, rating: 5 },
];

export const allProducts = [
  ...womenProducts,
  ...menProducts,
  ...accessoriesProducts,
  ...saleProducts,
];
