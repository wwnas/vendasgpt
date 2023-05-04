import React from "react";
import { useHistory } from "react-router-dom";

function SubscriptionPlans() {
  const history = useHistory();

  const handleUpgrade = () => {
    history.push("/subscribe");
  };

  return (
    <div>
      <h1>Planos de Assinatura</h1>
      <ul>
        <li>
          <h2>Plano Básico</h2>
          <p>Até 10 perguntas gratuitas</p>
        </li>
        <li>
          <h2>Plano Pro</h2>
          <p>Perguntas ilimitadas por R$19/mês</p>
          <button onClick={handleUpgrade}>Upgrade para Plano Pro</button>
        </li>
      </ul>
    </div>
  );
}

export default SubscriptionPlans;
