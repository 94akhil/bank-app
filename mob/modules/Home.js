import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/Search";
import { Icon } from "@rneui/base";
import { useState } from "react";
import commonData from "../data.json";
import { Card } from "@rneui/themed";

const Home = () => {
  const [label, setLabel] = useState("Default");

  const handleIconClick = (actionKey) => {
    setLabel(actionKey);
  };

  const onClickNotification = () => {
    setLabel("Notification");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["#262626", "#191919", "#0c0c0c"]}
          style={styles.container}
        >
          <View style={styles.navBar}>
            <Search style={styles.search}></Search>
            <View style={styles.navbarIcon}>
              {commonData["navbarIcons"].map((icon) => (
                <Icon
                  key={icon.id}
                  name={icon.name}
                  color={icon.color}
                  type={icon.type}
                  onPress={() => handleIconClick(icon.actionKey)}
                />
              ))}
            </View>
          </View>

          <View style={styles.primeFeatureContainer}>
            <Card containerStyle={styles.primeCardContainer} wrapperStyle={styles.primeCardWrapper}>
              {commonData["primeFeatureIcons"].map((icon) => (
                <View key={icon.id} style={styles.primeOptions}>
                  <Icon
                    name={icon.name}
                    color={icon.color}
                    type={icon.type}
                    onPress={() => handleIconClick(icon.actionKey)}
                  />
                  <Text style={styles.primeLabel1}>{icon.label1}</Text>
                  <Text style={styles.primeLabel2}>{icon.label2}</Text>
                </View>
              ))}
            </Card>
          </View>

          <View>

          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  navBar: {
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbarIcon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  primeFeatureContainer:{
    paddingBottom:'4%'
  },
  primeCardContainer: {
    color: "white",
    backgroundColor: "#353535",
    borderColor:'#353535',
    borderRadius: '5%',
  },
  primeCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems:'center'
  },
  primeOptions: {
    padding: "2.5%",
    justifyContent:'center',
    alignItems:'center'
  },
  primeLabel1: {
    textAlign: "justify",
    paddingHorizontal: "1%",
    paddingTop:'3.5%',
    color:'white',
    fontSize:"13%"
  },
  primeLabel2: {
    textAlign: "justify",
    paddingBottom:'2%',
    color:'white',
    fontSize:"13%"
  },
});

export default Home;
