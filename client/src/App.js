import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import Chat from "./components/Chat";
import PredefinedQuestions from "./components/PredefinedQuestions";
import TopQueries from "./components/TopQueries";
import TrendingTopics from "./components/TrendingTopics";
import SubscriptionPlans from "./components/SubscriptionPlans";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/predefined-questions">
          <PredefinedQuestions />
        </Route>
        <Route path="/top-queries">
          <TopQueries />
        </Route>
        <Route path="/trending-topics">
          <TrendingTopics />
        </Route>
        <Route path="/subscribe">
          <SubscriptionPlans />
        </Route>
        <Route path="/">
          <h1>Bem-vindo à Plataforma de Suporte a Vendas com ChatGPT</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
