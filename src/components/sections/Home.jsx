import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: var(--spacing);
  text-align: center;

  .name {
    font-size: clamp(var(--fz-lg), 20vw, var(--fz-xl));
    line-height: 1;
  }

  .title {
    font-size: clamp(var(--fz-sm), 10vw, var(--fz-lg));
  }

  nav {
    display: flex;
    gap: var(--spacing);
  }

  nav a {
    padding: var(--spacing);
    border: var(--border-width) solid var(--color-1);
    text-align: center;
  }

  nav a:hover,
  nav a:active {
    color: var(--color-2);
    background-color: var(--color-1);
  }

  @media screen and (max-width: 350px) {
    nav {
      width: 100%;
      flex-direction: column;
    }
  }
`;

function Home() {
  return (
    <StyledHome id="home">
      <div>
        <div className="name">Martin</div>
        <div className="name">Ukhanov</div>
        <div className="title">Web Developer</div>
      </div>
      <nav>
        <a href="#contact">Contact Me</a>
        <a href="/">View Resume</a>
      </nav>
    </StyledHome>
  );
}

export default Home;
