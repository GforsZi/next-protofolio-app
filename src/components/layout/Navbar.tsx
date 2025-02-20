import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return(
    <>
<nav className="navbar navbar-expand-lg bg-none position-fixed z-2 border-bottom vw-100 border-dark-subtle" style={{backgroundColor: "rgba(212, 212, 212, 0.4)"}}>
  <div className="container d-flex justify-content-between">
    <div>
    <a className="navbar-brand text-start" href="/">Givaldi</a>
    </div>
    <div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header" >
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Sidebar</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link"href="/home">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/about/skill" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/about/">Me</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/about/my/project">My project</Link></li>
            <li><Link className="dropdown-item" href="/about/my/achievement">My achievement</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/about/skill" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Skill
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/about/skill/frontend">Frontend</Link></li>
            <li><Link className="dropdown-item" href="/about/skill/backend">Backend</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="/about/skill/non_programming">Non programming</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
    </div>
    </div>
  </div>
</nav>
    </>
  )
}