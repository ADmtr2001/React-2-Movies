import React from 'react';

import {Wrapper} from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <ul className='colon'>
        <li><a href='#'>FAQ</a></li>
        <li><a href='#'>Investor Relations</a></li>
        <li><a href='#'>Privacy</a></li>
      </ul>
      <ul className='colon'>
        <li><a href='#'>Help Center</a></li>
        <li><a href='#'>Jobs</a></li>
        <li><a href='#'>Cookie Preferences</a></li>
      </ul>
      <ul className='colon'>
        <li><a href='#'>Account</a></li>
        <li><a href='#'>Ways to Watch</a></li>
        <li><a href='#'>Corporate Information</a></li>
      </ul>
      <ul className='colon'>
        <li><a href='#'>Media Center</a></li>
        <li><a href='#'>Terms of Use</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
    </Wrapper>
  );
};

export default Footer;