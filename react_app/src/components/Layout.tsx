import type { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout: FC = () => {
    return (
        <div className={styles.Layout}>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
