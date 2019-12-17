import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <Route exact path="/" component={<div>App Home Route</div>} />
  </Router>
);

export default App;
