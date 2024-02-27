import React from 'react';
import { Image, View, Alert, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';  // Import Video from 'expo-av' instead of 'react-native-video'
import Constants from 'expo-constants';

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
  
  const handleLogin = () => {
    Alert.alert('Login?');
    // You can replace this with your desired action
  };
  
  
  return (
    <View style={{ flex: 1 }}>
    {/* Header */}
    <View style={styles.header}>
    <Image source={require('./assets/cal.png')} style={styles.headerImage} />
    {/* Login */}
    <TouchableOpacity style={styles.headerLogin_Button} onPress={handleLogin}>
    <Icon name="login" type="material" color="#fff" size={15} />
    <Text style={styles.iconText_Header}>Login</Text>
    </TouchableOpacity>
    {/* Items Cart */}
    <TouchableOpacity style={styles.headerCart_Button} onPress={handleLogin}>
    <Icon name="cart" type="material" color="#fff" size={15} />
    <Text style={styles.iconText_Header}>Cart</Text>
    </TouchableOpacity>
    </View>
    
    
    
    {/* Main content with ScrollView */}
     <ScrollView style={styles.scrollView}>
        <Video
          source={require('./assets/CaliTacosVideo.m4v')}
          useNativeControls
          resizeMode="contain"
          style={styles.video}
        />
      </ScrollView>
    
    
    {/* BUTTONS */}
    <View style={styles.footer}>
    {/* Reserve */}
    <TouchableOpacity style={styles.footerButton} onPress={handleReservePress}>
    <Icon name="book-information-variant" type="material" color="#fff" size={20} />
    <Text style={styles.iconText}>Reserve</Text>
    </TouchableOpacity>
    
    {/* Menu */}
    <TouchableOpacity style={styles.footerButton} onPress={handleMenuPress}>
    <Icon name="taco" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>Menu</Text>
    </TouchableOpacity>
    
    {/* Home */}
    <TouchableOpacity style={styles.footerButton} onPress={handleHomePress}>
    <Icon name="home" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>Home</Text>
    </TouchableOpacity>
    
    {/* Rewards */}
    <TouchableOpacity style={styles.footerButton} onPress={handleRewardsPress}>
    <Icon name="gift" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>Rewards</Text>
    </TouchableOpacity>
    
    {/* More */}
    <TouchableOpacity style={styles.footerButton} onPress={handleMorePress}>
    <Icon name="more" type="material" color="#fff" size={24} />
    <Text style={styles.iconText}>More</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    maxHeight: 500,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    
    
  },
  video: {
    flex: 1,
    position: 'absolute',
    top: 100,
    left: 0,
    bottom: 10,
    right: 0,
    width: '100%',
    height: 'auto',
    
  },
  header: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    alignItems: 'center',
    padding: 20,
    top: 0,
    backgroundColor: '#2A2929',
  },
  headerImage: {
    width: '70%',
    height: 70,
    top: 25,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  headerLogin_Button: {
    position: 'absolute',
    left: 25,
    top: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(50, 255, 20, 0.5)',
    padding: 15,
    borderRadius: 10,
  },
  headerCart_Button: {
    position: 'absolute',
    right: 20,
    top: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
  },
  iconText_Header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    padding: 20,
    backgroundColor: '#2A2929',
    alignSelf: 'center',
  },
  footerButton: {
    backgroundColor: '#228b22',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    width: '18%',
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
});

export default App;
