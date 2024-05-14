import { MdSearch, MdShoppingCart } from 'react-icons/md';
import styles from './navbar.module.css';



const Navbar = ({}) => {
  return <div className={styles.container}>
            <div className={styles.search}><MdSearch size={30}/></div>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    PARROT
                </div>
                <div className={styles.menuItem}>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Contact</li>

                </div>
            </div>
            <div className={styles.cart}>
                <MdShoppingCart size={30}/>
            </div>

  </div>

}

export default Navbar