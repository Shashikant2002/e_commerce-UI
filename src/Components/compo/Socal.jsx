import React from 'react';
import '../../Style/socal.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsGithub } from 'react-icons/bs';

const Socal = () => {
  return (
    <>
        <ul className="socal flex alignCenter justifyCenter comCardGap">
                <li><a href="/"><FaFacebookF /></a></li>
                <li><a href="/"><BsInstagram /></a></li>
                <li><a href="/"><FaLinkedinIn /></a></li>
                <li><a href="/"><BsGithub /></a></li>
        </ul>
    </>
  )
}

export default Socal