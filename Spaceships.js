import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from "react";
import styles from "./styles";

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <Text>Spaceships</Text>
      <StatusBar style="auto" />
    </View>
  );
}