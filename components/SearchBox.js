// SearchBox.js (p.372)
// Search box component for filtering items in a list/modal dialog on submit

import React, {useState} from 'react';
import { View, Text, TextInput, Modal, Button, StyleSheet } from 'react-native';
import styles from '../styles';

export default function SearchBox() {

  const [filter, setFilter] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.searchBoxContainer}>
      <TextInput 
        autoFocus
        style={styles.searchInput} 
        placeholder="Search..."
        onChangeText={setFilter}
        onSubmitEditing={() => setModalVisible(true)}
      />

      {/* Show a modal dialog when submitting search text */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Search for: {filter}</Text>
          <Button 
            style={styles.modalButton}
            title="Close" 
            onPress={() => setModalVisible(false)} 
          />
        </View>
      </Modal>
    </View>
  )
}