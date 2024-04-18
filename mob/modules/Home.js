import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/Search";
import { Icon } from "@rneui/base";
import { useState } from "react";
import commonData from "../data.json";
import { Card } from "@rneui/themed";
import Svg, { Circle, ClipPath, Defs, Image } from "react-native-svg";
import OptionCard from "../components/OptionCard";

const Home = () => {
  const [label, setLabel] = useState("Default");

  const handleIconClick = (actionKey) => {
    setLabel(actionKey);
  };

  const onClickNotification = () => {
    setLabel("Notification");
  };

  const billCardButtons={
    title1:"View All",
    title2:"My Bills",
  }

  const peopleCardButtons={
    title1:"View More",
    title2:"",
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={["#1c1b26", "#14141a"]}
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
            {commonData["primeFeatureIcons"].map((icon) => (
              <Card
                containerStyle={styles.primeFeatureCard}
                wrapperStyle={styles.primeCardWrapper}
              >
                <TouchableHighlight
                  key={icon.id}
                  style={styles.touchHighlight}
                  onPress={() => handleIconClick(icon.actionKey)}
                >
                  <Svg height="75" width="75">
                    <View style={styles.primeOptions}>
                      <Icon
                        name={icon.name}
                        color={icon.color}
                        type={icon.type}
                        style={styles.svgIcon}
                      />
                      <Text style={styles.primeLabel1}>{icon.label1}</Text>
                      <Text style={styles.primeLabel2}>{icon.label2}</Text>
                    </View>
                  </Svg>
                </TouchableHighlight>
              </Card>
            ))}
          </View>
            
          <OptionCard
            key="people-card"
            cssStyle={peopleCardStyle}
            onIconClick={handleIconClick}
            title={"People"}
            content={commonData["people"]}
            buttonDetail={peopleCardButtons}
          ></OptionCard>

          <OptionCard
            key="bills-card"
            cssStyle={biilsCardStyle}
            onIconClick={handleIconClick}
            title={"Bills and Recharges"}
            content={commonData["bills"]}
            buttonDetail={billCardButtons}
          ></OptionCard>

          <OptionCard
            key="offer-card"
            cssStyle={peopleCardStyle}
            onIconClick={handleIconClick}
            title={"Offers and Rewards"}
            content={commonData["offersRewards"]}
          ></OptionCard>

          <View>
            <Text style={styles.primeLabel2}>{label}</Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const peopleCardStyle = {
  title: "white",
  label: "white",
  background: "#23232b",
  button1:{
    color:"#7f6bf2"
  },
};

const biilsCardStyle = {
  title: "white",
  label: "white",
  background: "#5742cf",
  button1:{
    color:"#5742cf",
    background:"white"
  },
  button2:{
    color:"white",
    background:"transparent"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  navBar: {
    backgroundColor: "transparent",
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
  primeFeatureContainer: {
    paddingBottom: "4%",
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  primePeopleContainer: {
    paddingBottom: "4%",
    backgroundColor: "transparent",
  },
  primeFeatureCard: {
    color: "white",
    backgroundColor: "#5742cf",
    borderRadius: "10%",
  },
  primeCardContainer: {
    color: "white",
    backgroundColor: "#23232b",
    borderRadius: "10%",
  },
  primeCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center",
  },
  primeOptions: {
    padding: "2.5%",
    justifyContent: "center",
    alignItems: "center",
  },
  primeLabel1: {
    textAlign: "justify",
    paddingHorizontal: "1%",
    paddingTop: "8%",
    color: "white",
    fontSize: 13,
  },
  primeLabel2: {
    textAlign: "justify",
    paddingBottom: "2%",
    color: "white",
    fontSize: 13,
  },
  touchHighlight: {
    borderRadius: "100%",
    marginVertical: "2%",
  },
  svgIcon: {
    paddingBottom: "4%",
  },
  cardHeader: {
    width: "100%",
    color: "white",
  },
});

export default Home;
