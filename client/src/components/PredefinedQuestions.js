import React from "react";
import axios from "axios";

function PredefinedQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getPredefinedQuestions = async () => {
      const response = await axios.get("/api/questions/predefined");
      setQuestions(response.data);
    };

    getPredefinedQuestions();
  }, []);

  return (
    <div>
      <h1>Perguntas Pré-definidas</h1>
      {questions.map(question => (
        <div key={question.id}>
          <h2>{question.text}</h2>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default PredefinedQuestions;
