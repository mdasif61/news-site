import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LaftNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1020/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      {category.map((cate) => (
        <Link to={`/category/${cate.id}`}>
          <p className="text-black">{cate.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default LaftNav;
