import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import portfolioImage from '../../images/portfolio.png';
import wordleCloneImage from '../../images/wordleClone.png';
import movieFinderImage from '../../images/movieFinder.png';
import pointOfSaleImage from '../../images/pointOfSale.png';
import ticTacToeImage from '../../images/ticTacToe.png';
import HTMLIcon from '../icons/HTMLIcon';
import CSSIcon from '../icons/CSSIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import WebpackIcon from '../icons/WebpackIcon';
import ReactIcon from '../icons/ReactIcon';
import StyledComponentsIcon from '../icons/StyledComponentsIcon';
import GoogleIcon from '../icons/GoogleIcon';

const PROJECTS = [
  {
    name: 'Portfolio',
    image: portfolioImage,
    tools: [
      <ReactIcon key="Portfolio React" />,
      <StyledComponentsIcon key="Portfolio Styled Components" />,
    ],
    repoURL: 'https://github.com/Martin-Ukhanov/portfolio',
    demoURL: '/',
  },
  {
    name: 'Wordle Clone',
    image: wordleCloneImage,
    tools: [
      <HTMLIcon key="Wordle Clone HTML" />,
      <CSSIcon key="Wordle Clone CSS" />,
      <JavaScriptIcon key="Wordle Clone JavaScript" />,
      <WebpackIcon key="Wordle Clone Webpack" />,
    ],
    repoURL: 'https://github.com/Martin-Ukhanov/wordle-clone',
    demoURL: 'https://martin-ukhanov.github.io/wordle-clone/',
  },
  {
    name: 'Movie Finder',
    image: movieFinderImage,
    tools: [
      <HTMLIcon key="Movie Finder HTML" />,
      <CSSIcon key="Movie Finder CSS" />,
      <JavaScriptIcon key="Movie Finder JavaScript" />,
      <WebpackIcon key="Movie Finder Webpack" />,
    ],
    repoURL: 'https://github.com/Martin-Ukhanov/movie-finder',
    demoURL: 'https://martin-ukhanov.github.io/movie-finder/',
  },
  {
    name: 'Point Of Sale',
    image: pointOfSaleImage,
    tools: [
      <HTMLIcon key="Point Of Sale HTML" />,
      <CSSIcon key="Point Of Sale CSS" />,
      <JavaScriptIcon key="Point Of Sale JavaScript" />,
      <GoogleIcon key="Point Of Sale Google" />,
    ],
    repoURL: '',
    demoURL:
      'https://script.google.com/macros/s/AKfycbxKPTaQIQx4vU3iyGnkA3JbapH9OhcsAcckHXyOBNqtofPJVVBh1J0jjSoSW2NHQWNuGg/exec?username=john1234&password=hello',
  },
  {
    name: 'Tic-Tac-Toe',
    image: ticTacToeImage,
    tools: [
      <HTMLIcon key="Tic-Tac-Toe HTML" />,
      <CSSIcon key="Tic-Tac-Toe CSS" />,
      <JavaScriptIcon key="Tic-Tac-Toe JavaScript" />,
    ],
    repoURL: 'https://github.com/Martin-Ukhanov/tic-tac-toe',
    demoURL: 'https://martin-ukhanov.github.io/tic-tac-toe/',
  },
];

const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing);
  }
`;

const StyledProjectSelect = styled.div`
  display: flex;
  overflow-x: auto;

  > :first-child {
    border-left: var(--border-width) solid var(--color-1);
  }

  * {
    border-right: var(--border-width) solid var(--color-1);
    border-top: var(--border-width) solid var(--color-1);
    border-bottom: var(--border-width) solid var(--color-1);
  }
`;

const StyledProjectButton = styled.button`
  flex: 1;
  min-width: 180px;
  padding: var(--spacing);
  color: ${(props) => (props.active ? 'var(--color-2)' : 'var(--color-1)')};
  background-color: ${(props) =>
    props.active ? 'var(--color-1)' : 'var(--color-2)'};

  :hover {
    color: var(--color-2);
    background-color: var(--color-1);
  }
`;

const StyledProjectDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: var(--spacing);

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: var(--spacing);
    text-align: center;
    line-height: 1.1;
  }

  .info .name {
    font-size: var(--fz-sm);
  }

  .info .tools {
    display: flex;
    justify-content: center;
    column-gap: var(--spacing);
  }

  .info .tools .icon {
    width: 50px;
    fill: var(--color-1);
  }

  .info nav {
    display: flex;
    column-gap: var(--spacing);
  }

  .info nav a {
    flex: 1;
    padding: var(--spacing);
    border: var(--border-width) solid var(--color-1);
    text-align: center;
  }

  .info nav a:hover {
    color: var(--color-2);
    background-color: var(--color-1);
  }

  img {
    height: 350px;
    border: var(--border-width) solid var(--color-1);
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Preload images
  useEffect(() => {
    for (let i = 0; i < PROJECTS.length; i += 1) {
      new Image().src = PROJECTS[i].image;
    }
  }, []);

  return (
    <StyledProjects id="projects">
      <div className="section-heading">Projects</div>
      <div className="container">
        <StyledProjectDisplay>
          <div className="info">
            <div className="name">{PROJECTS[currentProjectIndex].name}</div>
            <div className="tools">{PROJECTS[currentProjectIndex].tools}</div>
            <nav>
              <a
                href={PROJECTS[currentProjectIndex].repoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
              <a
                href={PROJECTS[currentProjectIndex].demoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </nav>
          </div>
          <img
            src={PROJECTS[currentProjectIndex].image}
            alt={PROJECTS[currentProjectIndex].name}
          />
        </StyledProjectDisplay>
        <StyledProjectSelect>
          {PROJECTS.map((project, index) => (
            <StyledProjectButton
              key={project.name}
              onClick={() => setCurrentProjectIndex(index)}
              active={index === currentProjectIndex}
            >
              {project.name}
            </StyledProjectButton>
          ))}
        </StyledProjectSelect>
      </div>
    </StyledProjects>
  );
}

export default Projects;
