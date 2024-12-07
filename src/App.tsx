import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
