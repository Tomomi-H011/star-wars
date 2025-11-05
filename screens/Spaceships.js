// Spaceships.js

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from "react";
import styles from "../styles";
import SearchBox from "../components/SearchBox";
import ListContainer from "../components/ListContainer";

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBox />
      <ListContainer apiEndpoint="starships/" />
    </View>
  );
}