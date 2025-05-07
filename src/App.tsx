import "./styles/base/main.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { TaskLayout } from "./layouts/TaskLayout";
import { PostsFeed } from "./pages/PostsFeed";
import { Counter } from "./pages/Counter";

const App: React.FC = () => {
    return (
        <BrowserRouter basename="/morsss-sandbox">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />}></Route>

                    <Route element={<TaskLayout />}>
                        <Route path="/feed" element={<PostsFeed />}></Route>
                        <Route path="/counter" element={<Counter />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
