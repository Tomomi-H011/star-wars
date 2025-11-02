/**
 * Home screen, Planets Screen Component
 */

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from "react";
import styles from "./styles";

export default function Planets() {
  return (
    <View style={styles.container}>
      <Text>Planets</Text>
      <StatusBar style="auto" />
    </View>
  );
}