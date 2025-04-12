import React from "react";
import "./NotFound.scss";
import { HomeButton } from "../../components/HomeButton";

export const NotFound: React.FC = () => {
    return (
        <div className="notfound">
            <h1 className="notfound__title">404</h1>
            <p className="notfound__text">Страница не найдена :(</p>
            <HomeButton />
        </div>
    );
};
