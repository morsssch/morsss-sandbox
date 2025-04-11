import { Outlet } from "react-router";
import "./TaskLayout.scss";

export const TaskLayout: React.FC = () => {
    return (
        <div className="taskLayout">
            <Outlet />
        </div>
    );
};
