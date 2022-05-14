import { createContext, useContext, useReducer } from "react";
import { data } from "./MasterWineList";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const random_bool = [true,false]


const getRandomIndex = () => {
  return Math.floor(Math.random() * random_bool.length)}
const Context = ({ children }) => {  const results = data.map(e => (
  {
  id: e.ID,
   name: e.Name,
   image: e.URL,
   ratings: Math.trunc(e.Rating),
   price: Math.trunc(e.Price),
   country: e.Country,
   year: e.Year,
   inStock: random_bool[getRandomIndex()]
  }
));

  const [state, dispatch] = useReducer(cartReducer, {
    products: results.slice(0,20),
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    year: 0,
    rating: 0,
    price: 0,
    inStock: false,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
