// Films.js

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from "react";
import styles from "../styles";
import ListContainer from "../components/ListContainer";
import SearchBox from "../components/SearchBox";

export default function Films() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBox />
      <ListContainer apiEndpoint="films" />
    </View>
  );
}
