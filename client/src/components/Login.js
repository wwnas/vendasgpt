import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post("/api/users/login", { email, password });

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      history.push("/");
    }
  };

  return (
    <div>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? <Link to="/register">Cadastre-se aqui</Link>.
      </p>
    </div>
  );
}

export default Login;
