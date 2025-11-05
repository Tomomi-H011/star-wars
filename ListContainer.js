import React, {useState, useEffect} from 'react';
import List from './List';

export default function ListContainer({apiEndpoint}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseUrl = 'https://swapi.tech/api/';

    
    useEffect(() => {
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

        fetchData();}, [apiEndpoint]);

    return (
        <List data={data}
        loading={loading}
        error={error}
        />
    );
}