import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./Routes/mainRouter";

export const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};
