import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, searchQuery,inStock,price,year,rating },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (inStock) {
      sortedProducts = sortedProducts.filter(element => element.inStock === true);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((element) =>  element.name.toLowerCase().includes(searchQuery));
    }

    if (rating) {
      sortedProducts = sortedProducts.filter(
        element => element.ratings === rating
      );
    }

    
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((e,i) => (
          <SingleProduct key={i} value={e} />
        ))}
      </div>
    </div>
  );
};

export default Home;
