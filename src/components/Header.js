import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact components={Header} />
        <Route path="/search/:query" components={SearchResults} />
      </Switch>
    </Router>
  );
}

