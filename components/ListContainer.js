// components/ListContainer.js
// Fetches data from Star Wars API and passes it to List component

import React, {useState, useEffect} from 'react';
import List from './List';
import { useNavigation } from '@react-navigation/native';
import { func } from 'prop-types';


export default function ListContainer({apiEndpoint}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseUrl = 'https://swapi.tech/api/';

    // For handing navigation between main and details screens
    const navigation = useNavigation();

    useEffect(() => {
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

    return (
        <List data={data}
        loading={loading}
        error={error}
        handleSwipe={handleSwipe}   
        />
    );
}