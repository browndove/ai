import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.content}>
        <Text  style={styles.title  }>ChrisAi</Text>
        <Text style={styles.sub}>
            The future is here, powered by ChrisAi 🚀 🌍
        </Text>
      </View>
      <View style={styles.secondview}>
        <Image source={require('../../assets/tech.jpg')} style={styles.image} />
      </View>

      <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.touch}>
            <Text style={styles.text2}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    justifyContent: 'space-around',
    backgroundColor: 'white',
    
    },

    content: {
        marginBottom: '2px',
        marginTop: '2px'
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#007bff',
        fontSize: 30,
        marginBottom: 3

    },

    sub:{
        textAlign: 'center',
        letterSpacing: 0.5,
        fontWeight: '700',
        color: '#666666',
        fontSize: 15
    },

    secondview:{
        flexDirection: 'row',
        justifyContent: 'center',
    },

    image:{
        width: 250,
        height: 250,
        borderRadius: 160
    },
    touch:{
        backgroundColor: '#007bff',
        marginLeft: 55,
        marginRight: 55,
        padding: 10,
        borderRadius: 15
    },
    text2:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
})