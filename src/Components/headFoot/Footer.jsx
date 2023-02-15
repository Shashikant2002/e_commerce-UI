import React from 'react';
import '../../Style/footer.css';
import Socal from '../compo/Socal';
import WLogo from '../../Assets/Logo/w-logo.png'

const Footer = () => {
  return (
    <>
      <footer className="footer commonSec">
        <div className="container flex flexDirCol alignCenter">
          <div className="logo">
            <img src={WLogo} alt="" />
          </div>
          <Socal />
        </div>
      </footer>
      <div className="minFoot textCenter">
        <p>Copyright 2023 by Refsnes Data. All Rights Reserved. <br />
          ECom site is made by Shashikant.</p>
      </div>
    </>
  )
}

export default Footer