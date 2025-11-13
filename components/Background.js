// Background.js
// Background image with lazy loading
// Displays placeholder until loaded

import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useState } from 'react';

export default function Background({ 
  children,
  source = require('../assets/star-wars-7330845_1920.jpg'),
  placeholder = require('../assets/imagePlaceholder.png'),
  style = { width: '100%', height: '100%' },
  resizeMode = 'center',
}) {
  const   [loaded, setLoaded] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
    <ImageBackground
      source={loaded ? source : placeholder}
      style={style}
      resizeMode={resizeMode}
      onLoadEnd={() => {
          setLoaded(true);
      }}
    >
      {children}
    </ImageBackground>
    </View>
  );
}