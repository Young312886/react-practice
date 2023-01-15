import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Coins from "./routes/Coins";
import Todos from "./routes/Todos";

// https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
function App() {
  return (
    <Router>
      <Route path="/todos">
        <Todos />
      </Route>
      <Route path="/coins">
        <Coins />
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
