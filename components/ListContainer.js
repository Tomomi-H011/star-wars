// components/ListContainer.js
// Fetches data from Star Wars API and passes it to List component

import React, {useState, useEffect} from 'react';
import { View, Text, Modal, Button } from 'react-native';
import List from './List';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { func } from 'prop-types';
import styles from '../styles';
import SearchBox from './SearchBox';


export default function ListContainer({apiEndpoint}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterText, setFilterText] = useState('');
    const [modalVisible, setModalVisible] = useState(true);
    const baseUrl = 'https://swapi.tech/api/';

    // For handing navigation between main and details screens
    const navigation = useNavigation();

    useFocusEffect(() => {
        // Define an async function to fetch data for main screens
        async function fetchData() {
            try {
                const response = await fetch(baseUrl + apiEndpoint);
                const results = await response.json();
                setData(results.results || results.result); // Extract the results array. Films array is 'result' not 'results'
                setLoading(false); // Set loading to false when done
            } catch (err) {
                setError('Failed to fetch data: ' + err.message);
                setLoading(false);
            }
        }

        fetchData();}, [apiEndpoint]
    );

    // Function for swipe action and navigating to details screens
    function handleSwipe(item) {
        navigation.navigate('Details', {
            apiEndpoint: apiEndpoint,
            uid: item.uid,
            name: item.name,
            ...item
        });
    }

    // Filter function for the search box based on name or title.
    // If filterText is empty when user hits enter, show all items.
    const filteredData = data.filter(item => {
            const itemName = item.name || item.properties?.title || '';
            return itemName.toLowerCase().includes(filterText.toLowerCase());
        });

    // Reset modal state
    useEffect(() => {
    if (filteredData.length === 0 && data.length > 0) {
        setModalVisible(true);
    }
    }, [filterText, filteredData, data]);

    // Display a list. Trigger filter only when user hits enter in the search box
    return (
        <>
        <SearchBox onEnter={setFilterText} />
        <List data={filteredData}
        loading={loading}
        error={error}
        handleSwipe={handleSwipe}   
        />

        {/* Show a modal dialog when filter does not return a match */}
        {filteredData.length === 0 && data.length > 0 && (
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>No match for: {filterText}</Text>
                    <Button 
                    style={styles.modalButton}
                    title="Close" 
                    onPress={() => {
                        setModalVisible(false); 
                        setFilterText('');}} 
                    />
                </View>
            </Modal>
            )}
        </>
    );
}