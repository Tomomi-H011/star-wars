// components/Swipeable.js
// Swipeable component with modal dialog on swipe

import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, Modal, Button } from "react-native";
import styles from "../styles";

export default function Swipeable({ onSwipe, displayText }) {
  const [modalVisible, setModalVisible] = useState(false);
  
  // Trigger onSwipe function when user swipes - using textbook approach
  function onScroll(e) {
    if (e.nativeEvent.contentOffset.x >= 200) {
      setModalVisible(true);
      onSwipe && onSwipe(); // Call the passed onSwipe callback if provided
    }
  }

  // ScrollView props and styles
  const scrollProps = {
    horizontal: true,
    pagingEnabled: true,
    showsHorizontalScrollIndicator: false,
    scrollEventThrottle: 10,
    onScroll,
    contentContainerStyle: styles.swipeScrollContent,
    style: styles.swipeScrollView,
  };

  return (
    <View style={styles.swipeContainer}>
      <ScrollView {...scrollProps}>
        <TouchableOpacity style={styles.swipeItemTouchable}>
          <View style={styles.swipeItem}>
            <Text style={styles.swipeItemText}>{displayText}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>      
      
        {/* Show a modal dialog when swiping */}
        <Modal visible={modalVisible} transparent={true}>
            <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Show details for: {displayText}</Text>
            <Button 
                style={styles.modalButton}
                title="Close" 
                onPress={() => setModalVisible(false)} 
            />
            </View>
        </Modal>
    </View>
  );
}