import styles from './sidebar.module.css'

import { MenuButton } from '../MenuButton/MenuButton'

export function Sidebar () {
    return (
        <header className={styles.sidebar}>
            <div className={styles.backgroundShapeLeft}></div>
            <div className={styles.sidebarContent}>         
                <MenuButton />
            </div>
        </header>
    )
}