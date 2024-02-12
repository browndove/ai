import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native'
import React,{useState} from 'react'
import Features from '../components/Features'
import { trialcontents } from '../constants'


const HomeScreen = () => {
    const [messages, SetMessages] = useState(trialcontents)
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View  style={styles.subcon}>
      <Image source={require('../../assets/tech.jpg')} style={styles.image} />
      </View>

    {/* message feature */}
{
    messages.length>0? (
        <View style={styles.container2}>
            <Text style={styles.textassist}>Assistant</Text>
            <View style={styles.maindev}>
            
            </View>
        </View>

        

    ) : (
        <Features />
    )
}

      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
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
    container:{
        marginVertical: 56,
    },
    container2:{
        marginVertical: 6,
        
        
    },
    textassist:{
        fontWeight: '700',
        color: 'black',
        marginLeft: 30,
        fontSize: 20
    },
    maindev:{
        height: '58%',
        backgroundColor: '#f6f3e7',
        
    },
})