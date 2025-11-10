// Spaceships.js

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import styles from "../styles";
import SearchBox from "../components/SearchBox";
import ListContainer from "../components/ListContainer";

export default function Spaceships() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SearchBox />
      <ListContainer apiEndpoint="starships/" />
    </SafeAreaView>
  );
}