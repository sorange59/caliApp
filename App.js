import React from 'react';
import { Font, Image, View, Alert, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
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
  const handleCheckout = () => {
    Alert.alert('Go to Checkout?');
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
      <TouchableOpacity style={styles.headerCart_Button} onPress={handleCheckout}>
        <Icon name="cart" type="material" color="#fff" size={15} />
        <Text style={styles.iconText_Header}>Cart</Text>
      </TouchableOpacity>
    </View>

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.videoContainer}>
          <Video
            source={require('./assets/CaliTacosVideo.m4v')}
            shouldPlay
            isMuted
            isLooping
            resizeMode="cover"
            style={styles.video}
          />
          <Text style={styles.bigText}>DEALS</Text>
          <Image source={require('./assets/3Tacos.jpg')} style={styles.dealsImage_topLeft} />
          <Image source={require('./assets/rolledTacos.jpg')} style={styles.dealsImage_topLeft} />
          <Image source={require('./assets/toGoPack.jpg')} style={styles.dealsImage_bottomRight} />
          
          
        </View>
      </ScrollView>
    </SafeAreaView>
      
      {/* Footer */}
      <View style={styles.footer}>
        {/* Reserve */}
        
        <TouchableOpacity style={styles.footerButton} onPress={handleReservePress}>
          <Icon name="book-information-variant" type="material" color="#fff" size={24} />
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
  header: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2A2929',
    zIndex: 1, // Add this line to set the zIndex of the header
    
    
  },
  headerImage: {
    width: '70%',
    height: 75,
    top: 30,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  headerLogin_Button: {
    position: 'absolute',
    left: 20,
    top: 55,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  headerCart_Button: {
    position: 'absolute',
    right: 20,
    top: 55,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  iconText_Header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  },
  
  
  container: {
    flex: 3,
    width: '100%',
  },
  scrollView: {
    backgroundColor: 'lightgreen',
    top: 88,
    width: '100%',
    
  },
  video: {
    width: '99%',
    top: 1,
    left: 2,
    padding: 100,
    borderRadius: 10,
    height: undefined, // Set an appropriate height for your video
  },
  bigText: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    width: '100%',
    backgroundColor: 'grey',
    
  },
  dealsImage_topLeft: {
    resizeMode: 'contain',
    width: '45%',
    alignItems: 'flex-start',
    position: 'relative',
    height: 190,
    left: 10,
  },
  dealsImage_bottomRight: {
    resizeMode: 'contain',
    width: '45%',
    alignItems: 'flex-end',
    position: 'relative',
    height: 190,
    left: 200,
    bottom: 190,
    
    
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
    flex: 2,
    zIndex: 1, // Add this line to set the zIndex of the header
    
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
