import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing);
    text-align: justify;
  }

  .tags {
    width: 100%;
    margin-top: var(--spacing);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: var(--fz-sm);
  }
`;

function About() {
  return (
    <StyledAbout id="about">
      <div className="section-heading">About</div>
      <div className="text">
        <p>
          Hi, my name is Martin and I love building things for the web. Equipped
          with a deep knowledge of programming and an eye for design, I strive
          to create exceptional digital experiences.
        </p>
        <p>
          I first started my coding journey during the pandemic learning how to
          create simple games. This sparked my love and passion for software
          development. Since then I&apos;ve spent countless hours studying and
          refining my skills in order to become the developer I am today.
        </p>
        <p>
          I&apos;m currently working towards a degree in computer science and am
          teaching myself web development on the side.
        </p>
      </div>
      <div className="tags">
        <div>&lt;Developer&gt;</div>
        <div>&lt;Designer&gt;</div>
        <div>&lt;Student&gt;</div>
      </div>
    </StyledAbout>
  );
}

export default About;
