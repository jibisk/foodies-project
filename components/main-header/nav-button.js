'use client';

import { useEffect } from "react";
import classes from './nav-button.module.css'

export default function NavButton({href,children}) {

    useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);


  return (
  <>
    <button className={`navbar-toggler ${classes.navbutton}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </>
  );
}
