import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios.get("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      setUser(response.data);
    };

    getUserProfile();
  }, []);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>E-mail: {user.email}</p>
      <p>Assinatura: {user.subscription}</p>
    </div>
  );
}

export default UserProfile;
