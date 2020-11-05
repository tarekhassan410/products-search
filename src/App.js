import "./App.css";
import { useState, useEffect } from "react";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Brands from "./components/Brands";

function App() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    let brandsQuery = "";
    let categoriesQuery = "";
    if (selectedBrands.length > 0) {
      selectedBrands.map(
        (selectedBrand) => (brandsQuery += "&brand=" + selectedBrand)
      );
    }
    if (selectedCategories.length > 0) {
      selectedCategories.map(
        (selectedCategory) =>
          (categoriesQuery += "&category.name=" + selectedCategory)
      );
    }
    fetch(
      `https://my-json-server.typicode.com/tarekhassan410/products-json/products?q=${searchTerm}` +
        brandsQuery +
        categoriesQuery
    )
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, [searchTerm, selectedBrands, selectedCategories]);

  function fetchInitialData() {
    fetch(
      "https://my-json-server.typicode.com/tarekhassan410/products-json/products"
    )
      .then((response) => response.json())
      .then((response) => setProducts(response));
    fetch(
      "https://my-json-server.typicode.com/tarekhassan410/products-json/Brands"
    )
      .then((response) => response.json())
      .then((response) => setBrands(response));
    fetch(
      "https://my-json-server.typicode.com/tarekhassan410/products-json/Categories"
    )
      .then((response) => response.json())
      .then((response) => setCategories(response));
  }

  function updateSelectedBrands(e) {
    if (selectedBrands.indexOf(e.target.value) > -1) {
      const updatedSelectedBrands = selectedBrands.filter(
        (selectedBrand) => selectedBrand !== e.target.value
      );
      setSelectedBrands(updatedSelectedBrands);
    } else {
      setSelectedBrands((selectedBrands) => [
        ...selectedBrands,
        e.target.value,
      ]);
    }
  }

  const updateSelectedCategories = (e) => {
    if (selectedCategories.indexOf(e.target.value) > -1) {
      const updatedSelectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== e.target.value
      );
      setSelectedCategories(updatedSelectedCategories);
    } else {
      setSelectedCategories((selectedCategories) => [
        ...selectedCategories,
        e.target.value,
      ]);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="container m-auto pt-10 px-4">
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search for products, brands"
            className="w-full p-4 text-sm rounded-lg bg-transparent border-solid border-2 border-black bg-white"
            onChange={(e) => setSearchTerm(e.target.value)}
            list="categories"
          />
          {searchTerm.length > 0 && (
            <datalist id="datalist" className="w-full" id="categories">
              {categories.map((category) => (
                <option
                  onClick={(e) => updateSelectedCategories(e)}
                  className="w-full"
                  value={category.name}
                  id="categoryOption"
                />
              ))}
            </datalist>
          )}
        </div>
        <Brands
          selectedBrands={selectedBrands}
          brands={brands}
          updateSelectedBrands={updateSelectedBrands}
        />

        <Categories
          selectedCategories={selectedCategories}
          categories={categories}
          updateSelectedCategories={updateSelectedCategories}
        />

        {searchTerm.length > 0 ? (
          <div className="text-lg mt-8"> search {searchTerm} </div>
        ) : (
          ""
        )}
        <Products products={products} />
      </div>
    </div>
  );
}

export default App;
