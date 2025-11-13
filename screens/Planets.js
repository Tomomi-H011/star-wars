/**
 * Home screen, Planets Screen Component
 */

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import styles from "../styles";
import ListContainer from "../components/ListContainer";
import SearchBox from "../components/SearchBox";
import LogoHeader from '../components/LogoHeader';
import Background from "../components/Background";

export default function Planets() {
  return (
    <View style={{ flex: 1 }}>
      <Background>
        <SafeAreaView style={styles.container}>
          <StatusBar style="dark" />
          <SearchBox />      
          <ListContainer apiEndpoint="planets" />
      </SafeAreaView>
    </Background>
    </View>
  );
}