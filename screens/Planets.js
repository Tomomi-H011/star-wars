/**
 * Home screen, Planets Screen Component
 */

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from "react";
import styles from "../styles";
import ListContainer from "../ListContainer";

export default function Planets() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ListContainer apiEndpoint="planets" />
    </View>
  );
}