import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductList() {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState({
    category: "",
    sort: "",
    page: 1,
  });
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilter({
      category: params.get("category") || "",
      sort: params.get("sort") || "",
      page: parseInt(params.get("page")) || 1,
    });
  }, [location.search]);
  const updateUrl = (newFilter) => {
    const params = new URLSearchParams();
    if (newFilter.category) params.set("category", newFilter.category);
    if (newFilter.sort) params.set("sort", newFilter.sort);
    if (newFilter.page) params.set("page", newFilter.page);
    navigate(`/product?${params.toString()}`);
  };
  return (
    <>
      <h2>Product List</h2>
      <div>
        <label htmlFor="category">category:</label>
        <select
          value={filter.category}
          onChange={(e) =>
            updateUrl({ ...filter, category: e.target.value, page: 1 })
          }
        >
          <option value="">All</option>
          <option value="Shoes">Shoes</option>
          <option value="Cloths">Cloths</option>
          <option value="Jwellery">Jwellery</option>
          <option value="Perfume">Perfume</option>
        </select>
      </div>{" "}
      <div>
        <label htmlFor="sort">sort:</label>
        <select
          value={filter.sort}
          onChange={(e) =>
            updateUrl({ ...filter, sort: e.target.value, page: 1 })
          }
        >
          <option value="">All</option>
          <option value="high">high</option>
          <option value="low">low</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => updateUrl({ ...filter, page: filter.page - 1 })}
          disabled={filter.page <= 1}
        >
          Perv
        </button>
        <span> Page {filter.page} </span>
        <button onClick={() => updateUrl({ ...filter, page: filter.page + 1 })}>
          Perv
        </button>
      </div>
      <div>
        <h4>CurrentFilters</h4>
        <p>{JSON.stringify(filter)}</p>
      </div>
    </>
  );
}

export default ProductList;
