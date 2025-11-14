// components/NetworkStatus.js
// Checks and displays the network connectivity status

import React, {useState, useEffect} from "react";
import { View, Text} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "../styles";


const connectedMap = {
    none: "No internet connection. Please turn on Wi-Fi or cellular data.",
    unknown: "No internet connection. Please turn on Wi-Fi or cellular data.",
    cellular: "Connected",
    wifi: "Connected",
}

export default function NetworkStatus({children}) {
    const [connected, setConnected] = useState("");
    const [connectionType, setConnectionType] = useState("");

    
    useEffect(() => {
        function onNetworkChange(connection) {
            setConnected(connectedMap[connection.type]);
            setConnectionType(connection.type);
        }
    
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    // Cleanup event listener on unmount
    return () => {
        unsubscribe();
    };
    }, []);

    // Only show message when not connected
    if (connectionType === 'none' || connectionType === 'unknown') {
        return (
        <View style={styles.networkStatusContainer}>
            <Text style={styles.networkStatusText}>{connected}</Text>
        </View>
        );
    } else {
        return children;
    }
}