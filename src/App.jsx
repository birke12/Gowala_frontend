import { useLocation, useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Backoffice from "./pages/backoffice/Backoffice";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/services", element: <Services /> },
    /* Backoffice kan kun tilgås for brugere med admin-rolle */
    {
      path: "/backoffice",
      element: (
        <ProtectedRoute requiredRole="admin">
          <Backoffice />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
