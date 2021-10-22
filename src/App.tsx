import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
} from "react-router-dom";

//pages
import TodoListPage from "./pages/todo-list";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} render={TodoListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
