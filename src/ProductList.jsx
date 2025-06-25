import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProductList() {
  const location = useLocation();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    sort: "",
    page: 1,
  });

  // Load filters from URL on mount or when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setFilters({
      category: params.get("category") || "",
      sort: params.get("sort") || "",
      page: parseInt(params.get("page")) || 1,
    });
  }, [location.search]);

  // Update URL when filters change
  const updateUrl = (newFilters) => {
    const params = new URLSearchParams();
    if (newFilters.category) params.set("category", newFilters.category);
    if (newFilters.sort) params.set("sort", newFilters.sort);
    params.set("page", newFilters.page);
    navigate(`/products?${params.toString()}`);
  };

  return (
    <div>
      <h2>Product List</h2>

      <div>
        <label>Category: </label>
        <select
          value={filters.category}
          onChange={(e) =>
            updateUrl({ ...filters, category: e.target.value, page: 1 })
          }
        >
          <option value="">All</option>
          <option value="shoes">Shoes</option>
          <option value="clothes">Clothes</option>
        </select>
      </div>

      <div>
        <label>Sort: </label>
        <select
          value={filters.sort}
          onChange={(e) =>
            updateUrl({ ...filters, sort: e.target.value, page: 1 })
          }
        >
          <option value="">Default</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </div>

      <div>
        <button
          onClick={() => updateUrl({ ...filters, page: filters.page - 1 })}
          disabled={filters.page <= 1}
        >
          Prev
        </button>
        <span> Page {filters.page} </span>
        <button
          onClick={() => updateUrl({ ...filters, page: filters.page + 1 })}
        >
          Next
        </button>
      </div>

      <div>
        <h4>Current Filters:</h4>
        <pre>{JSON.stringify(filters, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ProductList;
