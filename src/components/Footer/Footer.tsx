import React from 'react';

import {Wrapper} from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <ul className='colon'>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
      </ul>
      <ul className='colon'>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
      </ul>
      <ul className='colon'>
        <li>Account</li>
        <li>Ways to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>
      </ul>
      <ul className='colon'>
        <li>Media Center</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
    </Wrapper>
  );
};

export default Footer;