import {Link} from 'react-router-dom'

import styles from  './navbar.module.css'
import logo from "../../img/costs_logo.png"
function Navbar(){
     return(
        <nav className={styles.navbar}>
            
            <Link to="/">
                <img src={logo} alt="Costs" className={styles.logo} />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item } >
                        <Link to='/'>Home</Link>
                    </li>
                    <li class={styles.item} >
                        <Link to='/manga'>Manga</Link>
                    </li>
                    <li class={styles.item } >
                        <Link to='/animes'>Animes</Link>
                    </li>
                    <li class={styles.item } >
                        
                        <Link to='/Login'>Login</Link>
                    </li>    
                </ul>
           
        </nav> 
    )
}
export default Navbar