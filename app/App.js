import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Placeholder for cloud-like shape */}
        <Text style={{textAlign: 'center', fontSize: 20}}>Header</Text>
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem} />
        <TouchableOpacity style={styles.gridItem} />
        <TouchableOpacity style={styles.gridItem} />
        <TouchableOpacity style={styles.gridItem} />
      </View>
      <View style={styles.footer}>
        <Text style={{textAlign: 'center', fontSize: 16}}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEAC76', // Customized background color
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: 150, // Adjust the height as needed
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    justifyContent: 'center',
    // Add more styling here to make it look more like a cloud if needed
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'flex-start',
  },
  gridItem: {
    width: '48%', // Adjust width for spacing between items
    height: '40%', // Adjust height based on your needs
    backgroundColor: '#d8d8d8', // Adjust item background color as needed
    marginBottom: 10,
    borderRadius: 10, // Optional: for rounded corners
  },
  footer: {
    backgroundColor: '#B4411E', // Footer color
    height: 60, // Adjust the height as needed
    justifyContent: 'center',
  }
});

export default Dashboard;
