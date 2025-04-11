import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Counter } from "./pages/Counter";
import { MainLayout } from "./layouts/MainLayout";
import "./styles/base/main.scss";
import { TaskLayout } from "./layouts/TaskLayout";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />}></Route>

                    <Route element={<TaskLayout />}>
                        <Route path="counter" element={<Counter />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
