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

export default function Planets() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SearchBox />      
      <ListContainer apiEndpoint="planets" />
    </SafeAreaView>
  );
}