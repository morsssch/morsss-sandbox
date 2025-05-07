import { TaskHeader } from "../../components/TaskHeader";
import { useLocation } from "react-router";

import React, { useRef, useState } from "react";
import "./Counter.scss";
import { Button } from "../../components/Button/Button";

export const Counter: React.FC = () => {
    const location = useLocation();
    const TaskHeaderTitle = location.state?.title || "Morsss' sandbox";
    const startTimeRef = useRef<number>(0);
    const intervalRef = useRef<number | null>(null);
    const [time, setTime] = useState(0);
    const [saved, setSaved] = useState<string[]>([]);

    const startHandler = (): void => {
        if (intervalRef.current != null) return;

        startTimeRef.current = Date.now() - time;

        intervalRef.current = window.setInterval(() => {
            setTime(Date.now() - startTimeRef.current);
        }, 10);
    };

    const stopHandler = (): void => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            setSaved((prev) => [formatTime(time), ...prev].slice(0, 5));
            intervalRef.current = null;
        }
    };

    const resetHandler = (): void => {
        stopHandler();
        setTime(0);
        setSaved([]);
    };

    const formatTime = (ms: number): string => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${String(minutes).padStart(2, "0")}
      :${String(seconds).padStart(2, "0")}
      :${String(milliseconds).padStart(2, "0")}`;
    };

    return (
        <>
            <TaskHeader title={TaskHeaderTitle} />
            <div className="counter__wrapper">
                <h2 className="counter__value">{formatTime(time)}</h2>
                <div className="counter__button-container">
                    <Button onClick={startHandler}>Старт</Button>
                    <Button onClick={stopHandler}>Стоп</Button>
                    <Button onClick={resetHandler}>Сброс</Button>
                </div>
                <div className="counter__saved-values">
                    {saved.map((value, index) => (
                        <div key={index} className="counter__saved-value">{value}</div>
                    ))}
                </div>
            </div>
        </>
    );
};
