import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PaletteIcon from './icons/PaletteIcon';
import LeftArrowIcon from './icons/LeftArrowIcon';
import RightArrowIcon from './icons/RightArrowIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const StyledMenu = styled.menu`
  position: fixed;
  width: var(--menu-width);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--color-2);
  background-color: var(--color-1);
  border-right: var(--border-width) solid var(--color-1);
  text-align: center;
  overflow-y: auto;

  #menu-top {
    width: 100%;
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    color: var(--color-1);
    background-color: var(--color-2);
  }

  #menu-top .name {
    font-size: var(--fz-sm);
    line-height: 1.1;
  }

  #menu-top .title {
    font-size: var(--fz-xs);
  }

  #sections-nav {
    width: 100%;
    margin: var(--spacing) 0;
    display: flex;
    flex-direction: column;
  }

  #sections-nav a {
    padding: var(--spacing);
  }

  #sections-nav a:hover {
    color: var(--color-1);
    background-color: var(--color-2);
  }

  .resume-btn {
    padding: var(--spacing);
    margin-bottom: var(--spacing);
    border: var(--border-width) solid var(--color-2);
    border-radius: var(--border-radius);
  }

  .resume-btn:hover {
    color: var(--color-1);
    background-color: var(--color-2);
  }

  #palette-container {
    display: flex;
    margin: var(--spacing) 0;
  }

  #palette-container .icon {
    width: 30px;
    fill: var(--color-2);
  }

  #palette-container button {
    padding: var(--spacing);
  }

  #palette-container button .icon {
    width: 10px;
  }

  #socials-nav {
    width: 100%;
    padding: var(--spacing);
    display: flex;
    justify-content: center;
    column-gap: var(--spacing);
  }

  #socials-nav .icon {
    width: 35px;
    fill: var(--color-2);
  }

  @media screen and (max-width: 1200px) {
    position: static;
    min-width: 320px;
    width: 100%;
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    border-right: none;
    overflow-x: auto;
  }
`;

const StyledMenuButton = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  padding: var(--spacing);
  background-color: var(--color-2);

  .icon {
    height: 25px;
    fill: var(--color-1);
  }

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

function Menu({ menuVisible, setMenuVisible, previousPalette, nextPalette }) {
  return (
    <div>
      <StyledMenu visible={menuVisible}>
        <div id="menu-top">
          <div className="name">
            <div>Martin</div>
            <div>Ukhanov</div>
          </div>
          <div className="title">Web Developer</div>
        </div>
        <nav id="sections-nav">
          <a href="#home" onClick={() => setMenuVisible(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuVisible(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuVisible(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuVisible(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuVisible(false)}>
            Contact
          </a>
        </nav>
        <a href="/" className="resume-btn">
          Resume
        </a>
        <div id="palette-container">
          <button type="button" onClick={previousPalette}>
            <LeftArrowIcon />
          </button>
          <PaletteIcon />
          <button type="button" onClick={nextPalette}>
            <RightArrowIcon />
          </button>
        </div>
        <nav id="socials-nav">
          <a
            href="https://www.linkedin.com/in/martin-ukhanov-658079249"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/Martin-Ukhanov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </nav>
      </StyledMenu>
      <StyledMenuButton onClick={() => setMenuVisible(!menuVisible)}>
        {menuVisible ? <XIcon /> : <MenuIcon />}
      </StyledMenuButton>
    </div>
  );
}

Menu.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
  setMenuVisible: PropTypes.func.isRequired,
  previousPalette: PropTypes.func.isRequired,
  nextPalette: PropTypes.func.isRequired,
};

export default Menu;
