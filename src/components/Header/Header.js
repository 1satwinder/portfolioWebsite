import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href='/'>
          <a style= {{display:"flex", alignItems:"center", color:"white", marginBottom:"20px"}}>
           <DiCssdeck size="3rem" /> <Span>Portfolio</Span> 
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" scrollSmooth>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" scrollSmooth>
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" scrollSmooth>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact-me" scrollSmooth>
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/1satwinder" target="_blank">
          <AiFillGithub size="3rem"></AiFillGithub>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/satwinder1" target="_blank">
          <AiFillLinkedin size="3rem"></AiFillLinkedin>
        </SocialIcons>
        <SocialIcons href="https://instagram.com/1satwindersingh" target="_blank">
          <AiFillInstagram size="3rem"></AiFillInstagram>
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
