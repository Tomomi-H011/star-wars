// SearchBox.js (p.372)
// Search box component for filtering items in a list/modal dialog on submit

import React, {useState} from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet } from 'react-native';
import styles from '../styles';

export default function SearchBox({onEnter}) {

  const [filterText, setFilterText] = useState('');

  
  return (
    <View style={styles.searchBoxContainer}>
      <TextInput 
        style={styles.searchInput}
        value={filterText}
        placeholder="Search..."
        placeholderTextColor={'silver'}
        onChangeText={setFilterText}
        onSubmitEditing={() => onEnter(filterText)}
      />
    </View>
  )
}