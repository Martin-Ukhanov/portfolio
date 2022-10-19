import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Main from './components/Main';

const PALETTES = [
  ['#000000', '#FFFFFF'],
  ['#001427', '#708D81'],
  ['#6E0D25', '#FFFFB3'],
  ['#07004D', '#EF946C'],
  ['#0F380F', '#8CAE68'],
  ['#ED254E', '#F9DC5C'],
  ['#3A015C', '#21FA90'],
  ['#CEFF1A', '#000000'],
];

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [paletteIndex, setPaletteIndex] = useState(
    // Set random palette index as default
    Math.floor(Math.random() * PALETTES.length)
  );

  // Apply palette
  useEffect(() => {
    const root = document.querySelector(':root');
    root.style.setProperty('--color-1', PALETTES[paletteIndex][0]);
    root.style.setProperty('--color-2', PALETTES[paletteIndex][1]);
  }, [paletteIndex]);

  const previousPalette = () => {
    let index;

    if (paletteIndex === 0) {
      index = PALETTES.length - 1;
    } else {
      index = paletteIndex - 1;
    }

    setPaletteIndex(index);
  };

  const nextPalette = () => {
    let index;

    if (paletteIndex === PALETTES.length - 1) {
      index = 0;
    } else {
      index = paletteIndex + 1;
    }

    setPaletteIndex(index);
  };

  return (
    <div>
      <Menu
        menuVisible={menuVisible}
        setMenuVisible={setMenuVisible}
        previousPalette={previousPalette}
        nextPalette={nextPalette}
      />
      <Main menuVisible={menuVisible} />
    </div>
  );
}

export default App;
