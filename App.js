import React, { useEffect, useState } from 'react';
import { Font, Image, View, Alert, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';  // Import Video from 'expo-av' instead of 'react-native-video'
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo-app-loading';
import SedgwickAve from './assets/fonts/SedgwickAve.ttf';


const App = () => {
  const handleReservePress = () => {
    Alert.alert('Reserve button clicked');
    // You can replace this with your desired action
  };
  
  const handleMenuPress = () => {
    navigation.navigate('Menu')
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

  const [fontLoaded, setFontLoaded] = useState(false);

  const [loaded] = useFonts({
    'SedgwickAve-Regular': require('./assets/fonts/SedgwickAve.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      setFontLoaded(true);
    }
  }, [loaded]);
  
  return (
  <View style={{ flex: 1 }}>
    {/* Header */}
    <View style={styles.header}>
      <Image source={require('./assets/cal.png')} style={styles.headerImage} />
      {/* Login */}
      <TouchableOpacity style={styles.headerLogin_Button} onPress={() => navigation.navigate("Menu")}>
        <Icon name="login" type="material" color="#fff" size={15} />
        <Text style={styles.iconText_Header}>Login</Text>
      </TouchableOpacity>
      {/* Items Cart */}
      <TouchableOpacity style={styles.headerCart_Button} onPress={handleCheckout}>
        <Icon name="cart" type="material" color="#fff" size={15} />
        <Text style={styles.iconText_Header}>Cart</Text>
      </TouchableOpacity>
    </View>

    <SafeAreaView style={styles.container} backgroundImage={require('./assets/cal.png')}>
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
          
          <SafeAreaView style={styles.horiContainer}>
            <ScrollView horizontal={true} style={styles.horiScroll}>
              <Image source={require('./assets/3Tacos.jpg')} style={styles.dealsHori_Scroll} />
              <Image source={require('./assets/rolledTacos.jpg')} style={styles.dealsHori_Scroll} />
              <Image source={require('./assets/toGoPack.jpg')} style={styles.dealsHori_Scroll} />
              <TouchableOpacity style={styles.moreButton} onPress={handleRewardsPress}>
                <Icon name="arrow-right" type="material" color="#fff" size={24} />
                <Text style={styles.iconText}>All Deals</Text>
              </TouchableOpacity>
              <Text style={styles.emptyTerm_Hori} />
              
            </ScrollView>
          </SafeAreaView>
          
          <Text style={styles.bigText_Menu}>MENU</Text>
          
          <SafeAreaView style={styles.horiContainer_Menu}>
            <ScrollView horizontal={true} style={styles.horiScroll}>
              <Image source={require('./assets/3Tacos.jpg')} style={styles.menuHori_Scroll} />
              <Image source={require('./assets/rolledTacos.jpg')} style={styles.menuHori_Scroll} />
              <Image source={require('./assets/toGoPack.jpg')} style={styles.menuHori_Scroll} />
              <TouchableOpacity style={styles.moreButton} onPress={handleRewardsPress}>
               <Icon name="arrow-right" type="material" color="#fff" size={24} />
                <Text style={styles.iconText}>Full Menu</Text>
              </TouchableOpacity>
              <Text style={styles.emptyTerm_Hori} />
              
            </ScrollView>
          </SafeAreaView>
          
          <Text style={styles.infoText}>CaliTacos 2024 </Text>
          <Text style={styles.emptyTerm} />
          
          
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
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Menu')}>
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
    backgroundColor: '#2A2929',
    height: 1000,
  },
  scrollView: {
    top: 88,
    height: '100%',
    width: '100%',
    
    
  },
  video: {
    width: '100%',
    padding: 100,
    height: undefined, // Set an appropriate height for your video
  },
  
  bigText: {
    fontSize: 45,
    height: 35,
    fontFamily: 'SedgwickAve-Regular',
    textAlign: 'center',
    borderRadius: 4,
    marginHorizontal: 100,
    overflow: 'hidden',
    top: 2,
    backgroundColor: 'green',
    
  },
  bigText_Menu: {
    fontSize: 45,
    height: 35,
    fontFamily: 'SedgwickAve-Regular',
    textAlign: 'center',
    borderRadius: 4,
    marginHorizontal: 100,
    overflow: 'hidden',
    top: 7,
    backgroundColor: '#ff1a1a',
    
    
  },
  horiContainer: {
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: 'green',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    top: 5,
  },
 dealsHori_Scroll: {
    resizeMode: 'contain',
    borderRadius: 15,
    height: 200,
    position: 'relative',
    margin: 5,
    width: 200,
  },
  horiContainer_Menu: {
    paddingHorizontal: 5,
    alignItems: 'center',
    backgroundColor: 'green',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    top: 9,
  },
  menuHori_Scroll: {
    resizeMode: 'contain',
    borderRadius: 15,
    height: 200,
    position: 'relative',
    margin: 5,
    width: 200,
  },
  moreButton: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    marginLeft: 40,
    borderRadius: 10,
    opacity: 0.8,
    backgroundColor: 'grey',
  },
  infoText: {
    alignSelf: 'center',
    padding: 50,
    fontSize: 50,
    
  },
  emptyTerm_Hori: {
    margin: 20,
  },
  emptyTerm: {
    margin: 70,
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
