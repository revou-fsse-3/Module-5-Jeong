
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.text}><Link href="/">Pokémon Wiki</Link></h1>
            <h2 className={styles.navtext}><Link href="/about">About</Link></h2>
            <h2 className={styles.navtext}><Link href="/pokedex">Pokédex</Link></h2>
        </div>
    )
}

export default Navbar