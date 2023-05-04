import React, { useState, useEffect } from "react";
import axios from "axios";

function TrendingTopics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTrendingTopics = async () => {
      const response = await axios.get("/api/questions/trending");
      setTopics(response.data);
    };

    getTrendingTopics();
  }, []);

  return (
    <div>
      <h1>Tópicos em Tendências</h1>
      {topics.map(topic => (
        <div key={topic.id}>
          <h2>{topic.keyword}</h2>
          <p>{topic.count} consultas</p>
        </div>
      ))}
    </div>
  );
}

export default TrendingTopics;
