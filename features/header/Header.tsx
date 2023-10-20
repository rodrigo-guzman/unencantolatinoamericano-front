import styles from './Header.module.css'
import Navbar from '../navbar/Navbar'

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.header}>

                <div className={styles.navbar}>
                    <div className={styles.logo}>

                    </div>
                    <Navbar />
                </div>
                <div className={styles.content}>
                    <h1>Un Encanto Latinoamericano</h1>
                    <p>Descripción de la cabecera</p>
                </div>
            </div>
        </>
    )
}

export default Header;