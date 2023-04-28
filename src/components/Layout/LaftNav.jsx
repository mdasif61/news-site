import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LaftNav = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/categorys")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      {category.map((cate) => (
        <Link to={`/categorys/${cate.id}`}>
          <p className="text-black">{cate.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default LaftNav;
