// components/List.js
// Displays a list of items, shows loading and error states

import React from "react";
import PropType from "prop-types";
import {Text, FlatList, View, ActivityIndicator, ScrollView} from "react-native";
import Swipeable from "./Swipeable";
import styles from "../styles";

export default function List({data, fetchData, loading, error}) {
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    if (error) {
        return <Text>Error: {error}</Text>;
    }
    return (
        <ScrollView style={styles.scroll}>
            <FlatList style={styles.list}
                contentContainerStyle={styles.listContent}
                data={data}
                renderItem={({item}) => (
                    <Swipeable 
                        displayText={item.name || item.properties?.title}
                        onSwipe={() => {}}
                    />
                )}
                keyExtractor={(item) => item.url || item.properties?.url}
            />
        </ScrollView>
    );
}