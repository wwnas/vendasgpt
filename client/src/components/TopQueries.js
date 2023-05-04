import React, { useState, useEffect } from "react";
import axios from "axios";

function TopQueries() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const getTopQueries = async () => {
      const response = await axios.get("/api/questions/top");
      setQueries(response.data);
    };

    getTopQueries();
  }, []);

  return (
    <div>
      <h1>Top Consultas</h1>
      {queries.map(query => (
        <div key={query.id}>
          <h2>{query.text}</h2>
          <p>{query.count} consultas</p>
        </div>
      ))}
    </div>
  );
}

export default TopQueries;
