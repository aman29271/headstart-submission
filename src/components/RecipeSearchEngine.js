import React, { useState, useRef, useEffect } from "react";
import "../recipe.css";
import RecipeList from "./RecipeList";
import RecipeSearchBar from "./RecipeSearchBar";
import axios from "axios";
const RecipeSeachEngine = () => {
  const [data, setData] = useState('');
  const [height, setHeight] = useState(null);
  const [chips, setChips] = useState([]);
  const [page, setPage] = useState(1);
  const setHeightDOM = () => {
    const winHeight = document.innerHeight;
    const headerHeight = document.querySelector("header").clientHeight;
    const mainHeight = winHeight - headerHeight;
    mainSection.current.style.height = `${mainHeight}px`;
    setHeight(mainHeight);
  };
  const mainSection = useRef();
  useEffect(() => {
    setHeightDOM();
  });
  const fetchRecipeData = async (q, page) => {
    const res = await axios.get(
      `http://www.recipepuppy.com/api/?i=${q}&p=${page}`
    );
    const data1 = await res.json();
    setData(data, data1);
  };
  const queryGenerator = chips => {
    let str = "";
    return chips.map(chip => {
      return (str = str + chip + ",");
    });
  };
  const addInChips = (preState, chip) => {
    const newChips = [...preState, chip];
    setChips(newChips);
    const q = queryGenerator(chips);
    fetchRecipeData(q, page);
  };
  return (
    <>
      <section className="main" ref={mainSection}>
        <RecipeSearchBar updateChips={addInChips} chips={chips} />
        <RecipeList data={data} chips={chips}/>
      </section>
    </>
  );
};
export default RecipeSeachEngine;

const rawData = {
  title: "Recipe Puppy",
  version: 0.1,
  href: "http://www.recipepuppy.com/",
  results: [
    {
      title:
        "Roasted Garlic Grilling Sauce \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n",
      href:
        "http://www.kraftfoods.com/kf/recipes/roasted-garlic-grilling-sauce-56344.aspx",
      ingredients: "garlic, onions, hot sauce",
      thumbnail: "http://img.recipepuppy.com/634118.jpg"
    },
    {
      title: "Steamed Mussels I",
      href: "http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx",
      ingredients: "garlic, mussels, onions",
      thumbnail: "http://img.recipepuppy.com/29318.jpg"
    },
    {
      title: "Braised Beef and Onions",
      href:
        "http://www.epicurious.com/recipes/food/views/Braised-Beef-and-Onions-232969",
      ingredients: "allspice, garlic, onions",
      thumbnail: "http://img.recipepuppy.com/103021.jpg"
    },
    {
      title: "Dashi Basic Korean Kelp Stock Recipe",
      href:
        "http://www.grouprecipes.com/508/dashi-basic-korean-kelp-stock.html",
      ingredients: "anchovies, garlic, onions",
      thumbnail: "http://img.recipepuppy.com/351817.jpg"
    },
    {
      title: "Oven-Saut&#233;ed Onions and Garlic",
      href:
        "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1860015",
      ingredients: "onions, garlic, olive oil",
      thumbnail: "http://img.recipepuppy.com/527595.jpg"
    },
    {
      title: "Three-in-One Meals Meaty Tomato Sauce",
      href:
        "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1857779",
      ingredients: "ground beef, onions, garlic",
      thumbnail: "http://img.recipepuppy.com/555389.jpg"
    },
    {
      title: "\nPerfect Roast Chicken Recipe\n\n",
      href: "http://cookeatshare.com/recipes/perfect-roast-chicken-41630",
      ingredients: "onions, garlic, salt",
      thumbnail: "http://img.recipepuppy.com/806946.jpg"
    },
    {
      title: "\nMexican Rice Recipe\n\n",
      href: "http://cookeatshare.com/recipes/mexican-rice-47559",
      ingredients: "onions, garlic, crisco",
      thumbnail: "http://img.recipepuppy.com/816298.jpg"
    },
    {
      title: "\nCreamed Zucchini Recipe\n\n",
      href: "http://cookeatshare.com/recipes/creamed-zucchini-60366",
      ingredients: "zucchini, onions, garlic",
      thumbnail: "http://img.recipepuppy.com/821781.jpg"
    },
    {
      title: "\nChile Con Queso (Spicy Cheese Dip) Recipe\n\n",
      href:
        "http://cookeatshare.com/recipes/chile-con-queso-spicy-cheese-dip-2037",
      ingredients: "salsa, onions, garlic",
      thumbnail: "http://img.recipepuppy.com/823756.jpg"
    }
  ]
};
