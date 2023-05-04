import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Chat from "./Chat";
import Login from "./Login";
import Register from "./Register";
import UserProfile from "./UserProfile";
import PredefinedQuestions from "./PredefinedQuestions";
import TopQueries from "./TopQueries";
import TrendingTopics from "./TrendingTopics";
import SubscriptionPlans from "./SubscriptionPlans";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/predefined" component={PredefinedQuestions} />
        <Route path="/top" component={TopQueries} />
        <Route path="/trending" component={TrendingTopics} />
        <Route path="/subscribe" component={SubscriptionPlans} />
      </Switch>
    </Router>
  );
}

export default App;
