import React, { useEffect, useState } from "react";
import "./MicroTask.scss";
import { Link } from "react-router";
import { randomColor } from "../../utils/randomColor";

interface MicroTaskProps {
    title: string;
    description: string;
    path: string;
}

export const MicroTask: React.FC<MicroTaskProps> = ({
    title,
    description,
    path,
}) => {
    const [bgColor, setBgColor] = useState<string>("");

    useEffect(() => {
        setBgColor(randomColor());
    }, []);
    return (
        <Link to={path} state={{ title: title }}>
            <div className="microtask" style={{ backgroundColor: bgColor }}>
                <div className="microtask__inner">
                    <h3 className="microtask__title">{title}</h3>
                    <p className="microtask__description">{description}</p>
                </div>
            </div>
        </Link>
    );
};
