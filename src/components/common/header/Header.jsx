import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Latest</Link>
              </li>
              <li>
                <Link to='/africa'>Africa News</Link>
              </li>
              <li>
                <Link to='/world'>World</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/business'>Business</Link>
              </li>
              <li>
                <Link to='/entertainment'>Entertainment</Link>
              </li>
              <li>
                <Link to='/photos'>Photos</Link>
              </li>
              <li>
                <Link to='/videos'>Videos</Link>
              </li>
              <li>
                <Link to='/blogs'>Opinions & Blogs</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
