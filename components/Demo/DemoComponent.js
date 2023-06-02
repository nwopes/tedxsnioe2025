import React from 'react'
import styles from './DemoComponent.module.scss'
function DemoComponent() {
    return (
        <div className={styles.homeMainContainer}>
            <p className={styles.homeTitle}>TEDx Shiv Nadar Institute Of Eminence</p>
            <p className={styles.description}>This is a demo component which can be used as a base</p>
        </div>
    )
}

export default DemoComponent