import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./features/components/Layout";
import Home from "./features/pages/Home";
import NotFound from "./features/components/NotFound";

const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='profile' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Navigate replace to='profile' />} />
        </Route>
        <Route path='*' element={<NotFound />} />
    </Route>

))
export default router