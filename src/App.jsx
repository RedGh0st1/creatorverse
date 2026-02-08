import "./App.css";
import { useRoutes } from "react-router-dom";

import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

function App() {
  const element = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
    { path: "/view/:id", element: <ViewCreator /> },
  ]);

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">CreatorVerse</h1>
        {element}
      </div>
    </>
  );
}

export default App;
