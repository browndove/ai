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

const HomeScreen = () => {
  const [messages, SetMessages] = useState(trialcontents);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subcon}>
          <Image
            source={require("../../assets/tech.jpg")}
            style={styles.image}
          />
        </View>

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
                    return(
                    <View key={index} style={[styles.assistantImg]}>
                        <View style={styles.assistantImg2}>
                            <Image source={{uri: message.content}} style={[styles.assistantImg3 ,{width: wp(60), height:wp(55)}]} resizeMode="contain"/>
                        </View>
                    </View>
                    )
                  } else {
                    // Text response
                    return (
                      <View key={index}>
                        {/* Your text response JSX */}
                        <View key={index} style={[styles.assisantinput]}>
                          <View style={[{ width: wp(70) }, styles.assistantinner]}>
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
              <TouchableOpacity>
                
              </TouchableOpacity>
        </View>
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
  assisantinput:{
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  assistantinner:{
    backgroundColor: "#007bff",
    borderRadius: 16,
    padding: 10,
    borderTopLeftRadius: 0,
    marginBottom: 10,
    
  },
  assistantText:{
    color: "white"
  },
  assistantImg:{
    flexDirection: 'row',
    justifyContent: "flex-start"
  },
  assistantImg2:{
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#5fa8ff',
    borderTopLeftRadius: 0,
    borderRadius: 10,
  },
  assistantImg3:{
    borderRadius: 10,
  },
  buttonrecord:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
