// components/List.js
// Displays a list of items, shows loading and error states

import React from "react";
import PropType from "prop-types";
import {Text, FlatList, View, ActivityIndicator, Button, TouchableOpacity} from "react-native";
import styles from "../styles";

export default function List({data, fetchData, loading, error}) {
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    if (error) {
        return <Text>Error: {error}</Text>;
    }
    return (
        <FlatList style={styles.list}
            data={data}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.buttonText}>{item.name || item.properties.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.url || item.properties?.url}
        />
    );
}