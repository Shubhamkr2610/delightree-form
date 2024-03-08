import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CustomForm from "./CustomForm.tsx/CustomForm";
import Form from "./ReactHookForm.tsx/Form";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: _jsx(CustomForm, {}),
        },
        {
            path: "/form-by-using-inBuilt-hook",
            element: _jsx(Form, {}),
        },
    ]);
    return (_jsx(RouterProvider, { router: router }));
}
export default App;
