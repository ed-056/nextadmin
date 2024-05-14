import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import {
   MdDashboard,
   MdSupervisedUserCircle,
   MdShoppingBag,
   MdAttachMoney, 
   MdLogout,
  } from "react-icons/md";
import Image from "next/image";
 
 const menuItems =[
  {
    title:"pages",
    list:[
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard />,
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSupervisedUserCircle/>,
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdShoppingBag/>,
      },
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>,
      }
    ]
  },
  /* {
    title:"babies",
    list: [
      {
        title:"Dashboard",
        path:"/dashboard",
        icon:<MdDashboard/>,
      },
      {
        title:"Users",
        path:"/dashboard/users",
        icon:<MdSupervisedUserCircle/>,
      },
      {
        title:"Products",
        path:"/dashboard/products",
        icon:<MdShoppingBag/>,
      },
      {
        title:"Transactions",
        path:"/dashboard/transactions",
        icon:<MdAttachMoney/>,
      }
    ]
  } */

];



const Sidebar = () => {
  return <div className={styles.container}> 
   <div className={styles.user}>
    <Image className={styles.userImage} src="/avatar.png" alt="" width="50" height="50" />
   <div className={styles.userDetail}>
    <span className={styles.username}>EDDIE FURY</span>
    <span className={styles.userTitle}>Administrator</span>
   </div>
   
   </div>
    <ul className={styles.list}>
      {menuItems.map((cat) =>(
        <li key={cat.title}>
        <span className={styles.cat}>{cat.title}</span>
        {cat.list.map(item =>(
          <MenuLink item={item} key={item.title}/>
        )
            
          )
        }
           </li>
        
        

     
    
        
      )
        
    )
    }
      </ul>
      <button className={styles.logout}>
        <MdLogout/>Logout</button>
      
      </div>
 
  
}

export default Sidebar