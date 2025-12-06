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
  SlideInRight
  } from "react-native-reanimated";


export default function Swipeable({ onSwipe, displayText }) {
    
    const [modalVisible, setModalVisible] = useState(false);
    const scrollViewRef = useRef(null);

    // Web drag state
    const dragState = useRef({ dragging: false, startX: 0, lastX: 0 });

    // Web drag handlers (Get start and end positions)
    function handlePointerDown(e) {
      if (e.nativeEvent && e.nativeEvent.pointerType === 'mouse' || e.nativeEvent.pointerType === 'touch') {
        dragState.current.dragging = true;
        dragState.current.startX = e.nativeEvent.pageX;
        dragState.current.lastX = e.nativeEvent.pageX;
      }
    }

    function handlePointerMove(e) {
      if (dragState.current.dragging) {
        dragState.current.lastX = e.nativeEvent.pageX;
      }
    }

    //Trigger onSwipe on pointer up if dragged more than 5px
    function handlePointerUp(e) {
      if (dragState.current.dragging) {
        const deltaX = dragState.current.lastX - dragState.current.startX;
        if (Math.abs(deltaX) > 5) {
          onSwipe && onSwipe();
        }
        dragState.current.dragging = false;
      }
    }

  
  // Override & animate TouchableOpacity's styles
  const borderColor = useSharedValue(0);
  const backgroundColor = useSharedValue(0);
  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(borderColor.value, [0, 1], ['#be0affdb', '#6205f8ff']),
      backgroundColor: interpolateColor(backgroundColor.value, [0, 1], ['#c5b3d1ff', '#7e36f2ff']),
      opacity: interpolate(opacity.value, [0, 1], [1, 1]),
    };
  });

  // Define event handlers for TouchableOpacity
  const handlePressIn = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
  };
  const handlePressOut = () => {
    borderColor.value = withSpring(0);
    backgroundColor.value = withSpring(0);
  };
  const handlePress = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
  };
  const handleLongPress = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
  };
  
  // For web
  const handleMouseEnter = () => {
    borderColor.value = withSpring(1);
    backgroundColor.value = withSpring(1);
  };
  const handleMouseLeave = () => {
    borderColor.value = withSpring(0);
    backgroundColor.value = withSpring(0);
  };


  // Trigger onSwipe function when user swipes
  function onScroll(e) {
    if (e.nativeEvent.contentOffset.x >= 100) {
      // setModalVisible(true);
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
          // Web drag events for Expo Web
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <Animated.View 
            entering={SlideInRight}
            style={[styles.swipeItem, animatedStyles]}>
            <Text style={styles.swipeItemText}>{displayText}</Text>
          </Animated.View>
        </TouchableOpacity>
        <View style={styles.swipeBlank} />
      </ScrollView>      

      {/* Todo: Delete later when modal is no longer needed */}
      {/* Show a modal dialog when swiping */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Show details for: {displayText}</Text>
          <Button 
                style={styles.modalButton}
                title="Close" 
                onPress={() => {
                  setModalVisible(false);
                }} 
            />
        </View>
      </Modal>
    </View>
  );
}