// screens/Details.js
// Generic details screen for planets, starships, films, etc.

import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import styles from "../styles";
import Background from "../components/Background";

export default function Details({ route }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const name = route.params.name;
  const apiEndpoint = route.params.apiEndpoint;
  const uid = route.params.uid;
  const url = apiEndpoint && uid ? `https://swapi.tech/api/${apiEndpoint}/${uid}` : null;
  const navigation = useNavigation();

  useEffect(() => {
    if (!apiEndpoint || !uid) {
      setError('Missing API endpoint or UID.');
      setLoading(false);
      return;
    }
    async function fetchDetailsData() {
      try {
        const response = await fetch(url);
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('API did not return JSON.');
        }
        const results = await response.json();
        const extracted = results.results || results.result;
        setData(extracted);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data: ' + err.message);
        setLoading(false);
      }
    }
    fetchDetailsData();
  }, [apiEndpoint, uid, url]);

  if (loading) {
    return (
      <View style={[styles.container, { backgroundColor: 'black', paddingTop: 50 }]}>
        <Text style={styles.detailsText}>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={[styles.container, { backgroundColor: 'black', paddingTop: 50 }]}>
        <Text style={styles.detailsText}>{error}</Text>
      </View>
    );
  }

  // Render details based on apiEndpoint
  const properties = data.properties || {};

  return (
    <View style={{ flex: 1 }}>
      <Background>
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          <View style={styles.backNavigation}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()} 
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Ionicons name="arrow-back" size={28} color="silver" />
              <Text style={{ color: 'silver', fontSize: 18, marginLeft: 8 }}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>{properties.title || name || 'Unknown'}</Text>
            <ScrollView style={styles.scroll}>
                {/* Planet fields */}
                {apiEndpoint === 'planets' && (
                <>
                    <Text style={styles.detailsText}>{properties.population ? `- Population: ${properties.population}` : '- Population: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.diameter ? `- Diameter: ${properties.diameter}` : '- Diameter: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.climate ? `- Climate: ${properties.climate}` : '- Climate: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.terrain ? `- Terrain: ${properties.terrain}` : '- Terrain: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.orbital_period ? `- Orbital Period: ${properties.orbital_period}` : '- Orbital Period: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.rotation_period ? `- Rotation Period: ${properties.rotation_period}` : '- Rotation Period: No data'}</Text>
                </>
                )}
                {/* Starship fields */}
                {apiEndpoint === 'starships' && (
                <>
                    <Text style={styles.detailsText}>{properties.model ? `- Model: ${properties.model}` : '- Model: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.starship_class ? `- Class: ${properties.starship_class}` : '- Class: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.manufacturer ? `- Manufacturer: ${properties.manufacturer}` : '- Manufacturer: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.crew ? `- Crew: ${properties.crew}` : '- Crew: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.passengers ? `- Passengers: ${properties.passengers}` : '- Passengers: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.cargo_capacity ? `- Cargo Capacity: ${properties.cargo_capacity}` : '- Cargo Capacity: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.hyperdrive_rating ? `- Hyperdrive Rating: ${properties.hyperdrive_rating}` : '- Hyperdrive Rating: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.MGLT ? `- MGLT: ${properties.MGLT}` : '- MGLT: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.length ? `- Length: ${properties.length}` : '- Length: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.max_atmosphering_speed ? `- Max Speed: ${properties.max_atmosphering_speed}` : '- Max Speed: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.consumables ? `- Consumables: ${properties.consumables}` : '- Consumables: No data'}</Text>
                </>
                )}
                {/* Film fields */}
                {apiEndpoint === 'films' && (
                <>
                    <Text style={styles.detailsText}>{properties.director ? `- Director: ${properties.director}` : '- Director: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.producer ? `- Producer: ${properties.producer}` : '- Producer: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.release_date ? `- Release Date: ${properties.release_date}` : '- Release Date: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.episode_id ? `- Episode ID: ${properties.episode_id}` : '- Episode ID: No data'}</Text>
                    <Text style={styles.detailsText}>{properties.opening_crawl ? `- Opening Crawl:\n\n${properties.opening_crawl}` : '- Opening Crawl: No data'}</Text>
                </>
                )}
            </ScrollView>
          </View>
        </SafeAreaView>
      </Background>
    </View>
  );
}
