import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Features = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Features</Text>
      <View style={styles.content}>
        <View style={styles.view2}>
        <Image source={require('../../assets/tech.jpg')} style={styles.image} />
        <Text style={styles.imagetext}>ChrisAi</Text>
        </View>
        <Text style={styles.box2}>
     ChrisAi is an AI-powered conversational agent designed to understand and generate human-like text interactions.
        </Text>
      </View>
      
      <View style={styles.content2}>
        <View style={styles.view2}>
        <Image source={require('../../assets/dalle.png')} style={styles.image} />
        <Text style={styles.imagetext}>DALL-E</Text>
        </View>
        <Text style={styles.box2}>
        
DALL-E, developed by OpenAI, generates images from text, enabling creative visual synthesis.
        </Text>
      </View>
      <View style={styles.content3}>
        <View style={styles.view2}>
        <Image source={require('../../assets/photo.jpg')} style={styles.image} />
        <Text style={styles.imagetext}>Smart Ai</Text>
        </View>
        <Text style={styles.box2}>
        Smart AI denotes intelligent systems capable of learning, reasoning, and interacting with humans effectively.
        </Text>
      </View>
    </View>
  )
}

export default Features

const styles = StyleSheet.create({
    container:{
        height: '60%',
        marginTop: 16,
        
        paddingHorizontal: 20
    },
    title:{
        fontSize: 25,
        fontWeight: '600',
        color: 'gray',
        marginBottom: 16,
    },
    content:{
        
        backgroundColor: '#008080',
        paddingHorizontal: 8,
        marginVertical: 5,
        borderRadius: 10,
        

    },
    content2:{
        
        backgroundColor: '#DA70D6',
        paddingHorizontal: 8,
        marginVertical: 5,
        borderRadius: 10,
        

    },
    content3:{
        
        backgroundColor: '#00FFFF',
        paddingHorizontal: 8,
        marginVertical: 5,
        borderRadius: 10,
    },
    view2:{
        flexDirection: 'row',
        alignItems: 'center',   
    },
    image:{
        height: 60,
        width: 60,
        marginTop: 14,
        marginBottom: 10,
        borderRadius: 16,
        
        
    },
    imagetext:{
        fontWeight: '600',
        color: '#FAFAFA',
        fontSize: 20,
        marginLeft: 10
    },
    box2:{
        fontSize: 16,
        color: 'white',
        fontWeight: '400',
        marginBottom: 10,
    }

})
