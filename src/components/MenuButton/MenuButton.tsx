import styles from './menuButton.module.css'

export function MenuButton() {
    return (
        <div className={styles.menuIcon}>
            <div id={styles.gnavi} className={styles.nav}>
			    <div className={styles.navBtn}>
					<span className={styles.bars}>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
					</span>
			    </div>
  		    </div>
        </div>
    )
}