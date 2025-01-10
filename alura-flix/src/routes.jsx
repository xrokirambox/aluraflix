import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewVideo from "./pages/NewVideo";
import NewCategory from "./pages/NewCategory";
import NotFound from "./pages/NotFound";
import WatchVideo from "./pages/WatchVideo";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Index />} />
                    <Route path="newVideo" element={<NewVideo />} />
                    <Route path="newCategory" element={<NewCategory />} />
                    <Route path="/:id" element={<WatchVideo />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;