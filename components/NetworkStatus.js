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

export default function NetworkStatus() {
    const [connected, setConnected] = useState("");

    
    useEffect(() => {
        function onNetworkChange(connection) {
            setConnected(connectedMap[connection.type]);
        }
    
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    // Cleanup event listener on unmount
    return () => {
        unsubscribe();
    };
    }, []);

return (
    <View style={styles.networkStatusContainer}>
        <Text style={styles.networkStatusText}>{connected}</Text>
    </View>
);
}