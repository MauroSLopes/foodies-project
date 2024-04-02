import Link from "next/link";
import Image from "next/image";

import goBackImg from "@/assets/logo.png";
import styles from './main-header.module.css';

export default function MainHeader(){
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={goBackImg} alt="A plate with food on top" priority />
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals Page</Link>
                    </li>
                    <li>
                        <Link href="/community">Community Page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}