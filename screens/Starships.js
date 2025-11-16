// Starships.js

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import styles from "../styles";
import SearchBox from "../components/SearchBox";
import ListContainer from "../components/ListContainer";
import Background from "../components/Background";

export default function Starships() {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          <SearchBox />
          <ListContainer apiEndpoint="starships" />
        </SafeAreaView>
      </Background>
    </View>
  );
}