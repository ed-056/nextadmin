"use client"

import Link from "next/link"
import Style from "./menuLink.module.css"
import { usePathname } from "next/navigation"

const MenuLink = ({item}) => {
const pathname = usePathname()
console.log(pathname)
  return <Link href={item.path} className={`${Style.container} ${pathname === item.path && Style.active}`} >
   
    {item.icon}
    {item.title}
  </Link>
}

export default MenuLink