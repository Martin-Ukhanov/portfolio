import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const StyledMain = styled.main`
  min-width: var(--min-width);
  margin-left: var(--menu-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-1);
  background-color: var(--color-2);

  @media screen and (max-width: 1230px) {
    display: ${({ menuVisible }) => (menuVisible ? 'none' : 'flex')};
    margin-left: 0;
  }
`;

function Main({ menuVisible }) {
  return (
    <StyledMain menuVisible={menuVisible}>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </StyledMain>
  );
}

Main.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
};

export default Main;
