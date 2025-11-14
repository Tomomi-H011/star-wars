// Films.js

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import styles from "../styles";
import ListContainer from "../components/ListContainer";
import SearchBox from "../components/SearchBox";
import Background from "../components/Background";

export default function Films() {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          <SearchBox />
          <ListContainer apiEndpoint="films" />
        </SafeAreaView>
      </Background>
    </View>
  );
}
