//LogoHeader.js
// Lazy load logo header image

import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles';
import PropTypes from 'prop-types';
import { useState } from 'react';


// Display the logo header with lazy loading 
// Display placeholder until loaded
export default function LogoHeader({
    source = require('../assets/starwars_logo_b.png'),
    placeholder = require('../assets/imagePlaceholder.png'),
    style = { width: 350, height: 150,},
    resizeMode = 'contain'
}) {

    const [loaded, setLoaded] = useState(false);

    return (
        <View style={styles.logoHeaderContainer}>
            <Image
                source= {loaded ? source : placeholder}
                style={style}
                resizeMode={resizeMode}
                onLoadEnd={() => {
                    setLoaded(true);
                }}
            />
        </View>
    )
}

LogoHeader.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.number.isRequired,
  style: PropTypes.object,
  resizeMode: PropTypes.string,
}
