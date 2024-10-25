import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
    return(
        <nav className={s.container}>
            <Link to="/generate">Generate QR code</Link>
            <Link to="/scan">Scan QR code</Link>
            <Link to="/g_history">Generate History</Link>
            <Link to="/s_history">Scan history</Link>
        </nav>
    );
};