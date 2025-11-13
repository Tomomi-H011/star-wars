// components/Swipeable.js
// Swipeable component with animation and modal dialog on swipe

import React, { useState, useRef, use } from "react";
import { View, ScrollView, Text, TouchableOpacity, Modal, Button } from "react-native";
import styles from "../styles";
import PropType from "prop-types";
import Animated, 
  {interpolate,
interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  SlideInRight,
  SlideInUp
  } from "react-native-reanimated";


export default function Swipeable({ onSwipe, displayText }) {
  const [modalVisible, setModalVisible] = useState(false);
  const scrollViewRef = useRef(null);
  
  // Override & animate TouchableOpacity's styles
  const borderColor = useSharedValue(0);
  const backgroundColor = useSharedValue(0);
  const opacity = useSharedValue(0);
  // const shadowColor = useSharedValue(0);
  // const shadowOffset = { width: 5, height: 5 };
  // const shadowOpacity = 1;
  // const shadowRadius = 50;
  // const elevation = 10;
  // const boxShadow = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(borderColor.value, [0, 1], ['#be0affdb', '#6205f8ff']),
      backgroundColor: interpolateColor(backgroundColor.value, [0, 1], ['#c5b3d1ff', '#7e36f2ff']),
      opacity: interpolate(opacity.value, [0, 1], [1, 1]),
      // shadowColor: interpolateColor(shadowColor.value, [0, 1], ['#be0affdb', 'red']),
      // shadowOffset,
      // shadowOpacity,
      // shadowRadius,
      // elevation,
      // boxShadow: interpolate(boxShadow.value, [0, 1], ['5px 5px 50px #be0affdb', '10px 10px 45px #00ff66'])
    };
  });

  // Define event handlers for TouchableOpacity
  const handlePressIn = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
    // shadowColor.value = withSpring(1);
  };
  const handlePressOut = () => {
    borderColor.value = withSpring(0);
    backgroundColor.value = withSpring(0);
    // shadowColor.value = withSpring(0);
  };
  const handlePress = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
    // shadowColor.value = withSpring(1);
  };
  const handleLongPress = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
    // shadowColor.value = withSpring(1);
  };
  
  // For web
  const handleMouseEnter = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
    // shadowColor.value = withSpring(1);
  };
  const handleMouseLeave = () => {
    borderColor.value = withSpring(0);
    backgroundColor.value = withSpring(0);
    // shadowColor.value = withSpring(0);
  };


  // Trigger onSwipe function when user swipes
  function onScroll(e) {
    if (e.nativeEvent.contentOffset.x >= 200) {
      setModalVisible(true);
      onSwipe && onSwipe(); // Call the passed onSwipe callback if provided
      scrollViewRef.current?.scrollTo({ x: 0, animated: true });
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
      <ScrollView {...scrollProps} ref={scrollViewRef}>
        <TouchableOpacity 
          style={styles.swipeItemTouchable}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onPress={handlePress}
          onLongPress={handleLongPress}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Animated.View 
            entering={SlideInRight}
            style={[styles.swipeItem, animatedStyles]}>
            <Text style={styles.swipeItemText}>{displayText}</Text>
          </Animated.View>
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
                onPress={() => {
                  setModalVisible(false);
                  // scrollViewRef.current?.scrollTo({ x: 0, animated: true });
                }} 
            />
            </View>
        </Modal>
    </View>
  );
}