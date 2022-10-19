import React from 'react';
import styled from 'styled-components';
import HTMLIcon from '../icons/HTMLIcon';
import CSSIcon from '../icons/CSSIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import TypeScriptIcon from '../icons/TypeScriptIcon';
import ReactIcon from '../icons/ReactIcon';
import StyledComponentsIcon from '../icons/StyledComponentsIcon';
import WebpackIcon from '../icons/WebpackIcon';
import NpmIcon from '../icons/NpmIcon';
import GitIcon from '../icons/GitIcon';
import GitHubIcon from '../icons/GitHubIcon';

const SKILLS = [
  {
    name: 'HTML',
    icon: <HTMLIcon />,
  },
  {
    name: 'CSS',
    icon: <CSSIcon />,
  },
  {
    name: 'JavaScript',
    icon: <JavaScriptIcon />,
  },
  {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
  },
  {
    name: 'React',
    icon: <ReactIcon />,
  },
  {
    name: 'Styled Components',
    icon: <StyledComponentsIcon />,
  },
  {
    name: 'Webpack',
    icon: <WebpackIcon />,
  },
  {
    name: 'npm',
    icon: <NpmIcon />,
  },
  {
    name: 'Git',
    icon: <GitIcon />,
  },
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
  },
];

const StyledSkills = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(129px, 1fr));
    grid-auto-rows: 1fr;
    gap: var(--spacing);
  }

  .grid .skill {
    padding: var(--spacing);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: var(--spacing);
    border: var(--border-width) solid var(--color-1);
    font-size: var(--fz-xs);
    line-height: 1.2;
    text-align: center;
  }

  .grid .skill .icon {
    width: 100%;
    height: 100%;
    fill: var(--color-1);
  }
`;

function Skills() {
  return (
    <StyledSkills id="skills">
      <div className="section-heading">Skills</div>
      <div className="grid">
        {SKILLS.map((skill) => (
          <div className="skill" key={skill.name}>
            {skill.icon}
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </StyledSkills>
  );
}

export default Skills;
