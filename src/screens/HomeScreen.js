import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native'
import React,{useState} from 'react'
import Features from '../components/Features'

const HomeScreen = () => {
    const [messages, SetMessages] = useState([])
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View  style={styles.subcon}>
      <Image source={require('../../assets/tech.jpg')} style={styles.image} />
      </View>

    {/* message feature */}
{
    messages.lenght>0? (
        <View>

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
    
})