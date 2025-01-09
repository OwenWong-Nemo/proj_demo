import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const SERVER_PORT = 3000;
const SERVER = `http://10.0.2.2:${SERVER_PORT}`;

function DetailsScreen() {
  const [serverResponse, setServerResponse] = useState('Waiting for server response...');

  const fetchData = () => {
    // Fetch data from your server
    fetch(SERVER)  
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setServerResponse(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setServerResponse('Failed to fetch data');
      });
  };

  useEffect(() => {
    fetchData();  // Fetch data when the component is mounted
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Fetched Data: {serverResponse}</Text>
    </View>
  );
}

export default DetailsScreen;
