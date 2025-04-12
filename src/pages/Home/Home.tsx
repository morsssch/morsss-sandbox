import React, { useEffect, useState } from "react";

import "./Home.scss";
import { MicroTask } from "../../components/MicroTask/MicroTask";
import { MicroTaskPlaceholder } from "../../components/MicroTaskPlaceholder";
import tasks from '../../constants/microTasks.json'
export const Home: React.FC = () => {

    const [phantomTasks, setPhantomTasks] = useState<number>(0);

    useEffect(() => {
        const container = document.querySelector(".tasks__inner");
        const firstItem = document.querySelector(".microtask");

        if (!container || !firstItem) return;

        const observer = new ResizeObserver(() => {
            const containerWidth = container.getBoundingClientRect().width;
            const itemWidth = firstItem.getBoundingClientRect().width;

            const allTasks = document.querySelectorAll(".microtask");
            if (!allTasks.length) return;

            const tasksPerRow = Math.floor(containerWidth / itemWidth);
            const remainder = allTasks.length % tasksPerRow;

            setPhantomTasks(remainder ? tasksPerRow - remainder : 0);
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="tasks">
                <h1 className="tasks__title">Morsss' sandbox</h1>
                <div className="tasks__inner">
                    {tasks.map((task, index) => (
                        <MicroTask
                            key={index}
                            title={task.title}
                            description={task.description}
                            path={task.path}
                        />
                    ))}

                    {Array.from({ length: phantomTasks }).map((_, index) => (
                        <MicroTaskPlaceholder key={index} />
                    ))}
                </div>
            </div>
        </>
    );
};
