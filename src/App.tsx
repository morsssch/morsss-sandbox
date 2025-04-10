import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
import { Counter } from './pages/Counter'
import { MainLayout } from './layouts/MainLayout'
import './styles/base/main.scss';

const App: React.FC = () => {
  return (
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={<MainLayout />}
            >

              <Route
                path='/'
                element={<Home />}
              >
              </Route>

              <Route
                path='counter'
                element={<Counter />}
              >
              </Route>

              <Route 
                path='*'
                element={<NotFound />}
              >
              </Route>

            </Route>


          </Routes>
        </BrowserRouter>
  );
};

export default App;