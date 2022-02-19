import React, { useState, useEffect } from "react";

export default function DailyTotal({ url }) {
  const [total, setTotal] = useState(0);
  const fetchData = async () => {
    const response = await fetch(`${url}/.netlify/functions/getDailyTotal`);
    const data = await response.json();
    const formattedTotal = parseInt(
      data.npm.downloads.lastDay.count
    ).toLocaleString();
    setTotal(formattedTotal);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Yesterdays Total: {total}</h2>
    </>
  );
}
