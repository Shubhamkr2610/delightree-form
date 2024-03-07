import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CustomForm from "./CustomForm.tsx/CustomForm";
import Form from "./ReactHookForm.tsx/Form";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CustomForm />,
    },
    {
      path: "/form-by-using-inBuilt-hook",
      element: <Form />,
    },
  ]);
  return (

       <RouterProvider router={router} />

  );
}

export default App;
