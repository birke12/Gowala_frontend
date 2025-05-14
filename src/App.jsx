import { useLocation, useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
