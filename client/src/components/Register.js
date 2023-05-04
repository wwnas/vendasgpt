import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post("/api/users/register", {
      name,
      email,
      password
    });

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      history.push("/");
    }
  };

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <Link to="/login">Faça login aqui</Link>.
      </p>
    </div>
  );
}

export default Register;
