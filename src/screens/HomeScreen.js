import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
  } from "react-native";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import React, { useState } from "react";
  import Features from "../components/Features";
  import { trialcontents } from "../constants";
  import * as Speech from 'expo-speech';
  import Constants from 'expo-constants';
  import * as Permissions from 'expo-permissions';
  
  const HomeScreen = () => {
    const [messages, SetMessages] = useState(trialcontents);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(true);
    const clear = () => {
      SetMessages([]);
    }
  
    const stopSpeaking = () => {
      setSpeaking(false);
    }
  
    const startSpeechToText = async () => {
      try {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        if (status !== 'granted') {
          console.error('Permission to access microphone denied');
          return;
        }
  
        await Speech.startSpeechRecognitionAsync({
          language: 'en-US', // Specify the language
          onPartialResults: (result) => {
            console.log('Partial result:', result);
          },
          onResults: (result) => {
            console.log('Final result:', result);
            // Update state or perform any action with the recognized text
          },
        });
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    };
  
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.subcon}>
            <Image
              source={require("../../assets/tech.jpg")}
              style={styles.image}
            />
          </View>
          {
            messages.length === 0 ? (
              <Features />
            ) : (
              <>
                {/* Assistant and main content */}
                <View style={styles.contentContainer}>
                  <Text style={[styles.assistantText, { fontSize: wp(5) }]}>
                    Assistant
                  </Text>
                  <View style={[{ height: hp(58) }, styles.box]}>
                    <ScrollView
                      bounces={false}
                      style={[styles.vert]}
                      showsVerticalScrollIndicator={false}>
                      {messages.map((message, index) => {
                        if (message.role === "assistant") {
                          if (message.content.includes("https")) {
                            // It's an image
                            return (
                              <View key={index} style={[styles.assistantImg]}>
                                <View style={styles.assistantImg2}>
                                  <Image
                                    source={{ uri: message.content }}
                                    style={[
                                      styles.assistantImg3,
                                      { width: wp(60), height: wp(55) },
                                    ]}
                                    resizeMode="contain"
                                  />
                                </View>
                              </View>
                            );
                          } else {
                            // Text response
                            return (
                              <View key={index}>
                                {/* Your text response JSX */}
                                <View key={index} style={[styles.assisantinput]}>
                                  <View
                                    style={[{ width: wp(70) }, styles.assistantinner]}>
                                    <Text style={styles.assistantText}>
                                      {message.content}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            );
                          }
                        } else {
                          // User input
                          return (
                            <View key={index} style={[styles.userinput]}>
                              <View style={[{ width: wp(70) }, styles.userinner]}>
                                <Text style={styles.usertext}>{message.content}</Text>
                              </View>
                            </View>
                          );
                        }
                      })}
                    </ScrollView>
                  </View>
                </View>
                {/* recording, clear messages, stop speech */}
                <View style={[styles.buttonrecord]}>
                  {recording ? (
                    <TouchableOpacity>
                      <Image
                        style={[
                          styles.buttonrecordImg,
                          { width: hp(15), height: hp(10) },
                        ]}
                        source={require("../../assets/micro.gif")}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={startSpeechToText}>
                      <Image
                        style={[
                          styles.buttonrecordImg,
                          { width: hp(8), height: hp(8) },
                        ]}
                        source={require("../../assets/micro.png")}
                      />
                    </TouchableOpacity>
                  )}
                  {
                    messages.length > 0 && (
                      <TouchableOpacity onPress={clear} style={styles.deleteIcon}>
                        <Text style={styles.deleteText}>Clear</Text>
                      </TouchableOpacity>
                    )
                  }
                  {
                    speaking && (
                      <TouchableOpacity onPress={stopSpeaking} style={styles.speakIcon}>
                        <Text style={styles.speaking}>Stop</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
              </>
            )
          }
        </SafeAreaView>
      </View>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: "white",
      pertical: 56,
    },
    subcon: {
      flexDirection: "row",
      justifyContent: "center",
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 160,
    },
    assistantText: {
      color: "gray",
      marginLeft: 20,
      fontWeight: 600,
    },
    box: {
      backgroundColor: "#BEBEBE",
      borderRadius: 16,
      margin: 20,
    },
    vert: {
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    messageText: {
      marginTop: 5,
    },
    userinput: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    userinner: {
      backgroundColor: "white",
      borderRadius: 16,
      padding: 10,
      borderTopRightRadius: 0,
      marginBottom: 10,
    },
    assisantinput: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    assistantinner: {
      backgroundColor: "#007bff",
      borderRadius: 16,
      padding: 10,
      borderTopLeftRadius: 0,
      marginBottom: 10,
    },
    assistantText: {
      color: "white",
    },
    assistantImg: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    assistantImg2: {
      padding: 5,
      flexDirection: "row",
      backgroundColor: "#5fa8ff",
      borderTopLeftRadius: 0,
      borderRadius: 10,
    },
    assistantImg3: {
      borderRadius: 10,
    },
    buttonrecord: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    deleteIcon:{
      backgroundColor: '#af82bf',
      borderRadius: 45,
      padding: 5,
      position: 'absolute',
      right: 60
    },
    deleteText:{
      color: 'white',
      fontSize: 20,
      paddingHorizontal: 5,
    },
    speakIcon:{
      backgroundColor: 'red',
      borderRadius: 45,
      padding: 5,
      position: 'absolute',
      left: 60
    },
    speaking:{
      color: 'white',
      fontSize: 20,
      paddingHorizontal: 15,
    },
  });
  