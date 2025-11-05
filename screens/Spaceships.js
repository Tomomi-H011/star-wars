// Spaceships.js

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from "react";
import styles from "../styles";
import ListContainer from "../ListContainer";

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListContainer apiEndpoint="starships/" />
    </View>
  );
}