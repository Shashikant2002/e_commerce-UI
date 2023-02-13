import React from 'react';
import '../../Style/banner.css';
import { CgScrollV } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';



const Banner = ({ title, mainTitle }) => {
  const {pathname} = useLocation();

  return (
    <>
      <section style={pathname === "/" ? {padding: "300px 0 350px 0"}: {}} className="banner">
        <div className="container textCenter">
          {title ? <h3>{title}</h3> : ""}
          <h1>{mainTitle}</h1>
          <a href='#products' className='globalBtn'>Scroll Now <CgScrollV /></a>
        </div>
      </section>
    </>
  )
}

export default Banner