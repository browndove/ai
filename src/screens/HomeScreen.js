import { SafeAreaView, StyleSheet, Text, View ,Image, ScrollView} from 'react-native'
import React,{useState} from 'react'
import Features from '../components/Features'
import { trialcontents } from '../constants'

const HomeScreen = () => {
    const [messages, SetMessages] = useState(trialcontents)
    
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.subcon}>
                    <Image source={require('../../assets/tech.jpg')} style={styles.image} />
                </View>

                {/* Assistant and main content */}
                <View style={styles.contentContainer}>
                    <Text style={styles.textAssist}>Assistant</Text>
                    {messages.length > 0 ? (
                        <Text>Hello world</Text>
                    ) : (
                        <Features />
                    )}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: 'white',
        pertical: 56,
    },
    subcon:{
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 160
    },
    contentContainer:{
       
        
    },
    
   
    
    
})
