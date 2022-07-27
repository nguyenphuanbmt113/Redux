import React, { useEffect, useState } from "react";
import axios from "axios";
//https://api.spoonacular.com/recipes/random
export const Popular = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getPolular = async () => {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=ce65ef2f73bc49b698e37ba621573e37&number=9`
      );
      const data = res && res.data?.recipes;
      setData(data);
    };
    getPolular();
  }, []);
  return (
    <div>
      {data &&
        data.length > 0 &&
        data.map((recipe) => {
          return (
            <div key={recipe.id}>
              <p className="desc">{recipe.title}</p>
            </div>
          );
        })}
    </div>
  );
};
