import React from 'react';
import { Image, View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const handleReservePress = () => {
    Alert.alert('Reserve button clicked');
    // You can replace this with your desired action
  };
  
  const handleMenuPress = () => {
    Alert.alert('Menu button clicked');
    // You can replace this with your desired action
  };
  
  const handleHomePress = () => {
    Alert.alert('Home button clicked');
    // You can replace this with your desired action
  };
  
  const handleRewardsPress = () => {
    Alert.alert('Rewards button clicked');
    // You can replace this with your desired action
  };
  
  const handleMorePress = () => {
    Alert.alert('More button clicked');
    // You can replace this with your desired action
  };
  
  return (
    <View style={{ flex: 1, padding: 30 }}>
    {/* Image centered */}
    <Image
    source={require('./assets/cal.png')}
    style={styles.headerImage}
    />
    
    {/* BUTTONS */}
    <View style={styles.footer}>
    {/* Reserve */}
    <TouchableOpacity
    style={styles.footerButton}
    onPress={handleReservePress}
    >
    <Icon name="book-information-variant" type="material" color="#fff" size={20} />
    <Text style={styles.iconText}>Reserve</Text>
    </TouchableOpacity>
    
    {/* Menu */}
    <TouchableOpacity
    style={styles.footerButton}
    onPress={handleMenuPress}
    >
    <Icon name="taco" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>Menu</Text>
    </TouchableOpacity>
    
    {/* Home  */}
    <TouchableOpacity
    style={styles.footerButton}
    onPress={handleHomePress}
    >
    <Icon name="home" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>Home</Text>
    </TouchableOpacity>
    {/* Rewards */}
    <TouchableOpacity
    style={styles.footerButton}
    onPress={handleRewardsPress}
    >
    <Icon name="gift" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>Rewards</Text>
    </TouchableOpacity>
    {/* More */}
    <TouchableOpacity
    style={styles.footerButton}
    onPress={handleMorePress}
    >
    <Icon name="more" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>More</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '65%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    // Other styling for your image
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '120%',
    height: 'auto',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a background color to the footer
    alignSelf: 'center',
    
  },
  footerButton: {
    backgroundColor: '#228b22',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center', // Center the content horizontally
    width: '19%',
    row: 'space-between',
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5, // Adjust as needed
  },
});

export default App;
