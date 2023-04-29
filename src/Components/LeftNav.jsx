import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setIsActive(categoryId);
  };

  useEffect(() => {
    fetch("http://localhost:6020/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="pl-4 pr-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold mb-4">All Category</h1>
        <ul className=" text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`w-full pl-4 py-4 border-b border-gray-200  dark:border-gray-600 ${
                isActive === category.id ? "bg-[#E7E7E7]" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <Link
                to={`/category/${category.id}`}
                className="flex items-center gap-3 pl-12"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
