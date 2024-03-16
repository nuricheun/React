import React, { useState, useEffect } from "react";

export default function useProducts({ salesOnly }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥We received products information");
        setProducts(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      console.log("🧹 clean");
    };
  }, [salesOnly]);

  return [isLoading, error, products];
}
