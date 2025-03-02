import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
// import { ContactPage } from "./pages/Contact.page";
import { TestPage } from "./pages/TestPage";
import { ResultPage } from "./pages/ResultPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    // {
    //     path: "/contact",
    //     element: <ContactPage />,
    // },
    {
        path: "/test",
        element: <TestPage />,
    },
    {
        path: "/result",
        element: <ResultPage />,
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
