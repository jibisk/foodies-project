import Link from "next/link";
import Image from "next/image";

import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import NavButton from "./nav-button";

export default function MainHeader() {

  return (
  <>
    <MainHeaderBackground />
<nav className={`${classes.header} navbar navbar-expand-lg bg-transparent`}>
  <div className="container">

      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="home" />
        Food Lovers
      </Link>
    
    <NavButton />
    <div className={`${classes.nav} collapse navbar-collapse`} id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item text-center">
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>
        <li className="nav-item text-center">
          <NavLink href="/community">Fooodies Community</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
