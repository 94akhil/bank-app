import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/base";
import { Card, Button } from "@rneui/themed";
import Svg, { Circle, ClipPath, Defs, Image } from "react-native-svg";

const OptionCard = ({
  title,
  content,
  onIconClick,
  buttonDetail,
  cssStyle,
}) => {
  styles = {
    ...styles,
    primeCardContainer: {
      ...styles.primeCardContainer,
      backgroundColor: cssStyle.background,
    },
    primeLabel1: { ...styles.primeLabel1, color: cssStyle.label },
    primeLabel2: { ...styles.primeLabel2, color: cssStyle.label },
    cardHeader: { ...styles.cardHeader, color: cssStyle.title },
    button1: {
      ...styles.button1,

      backgroundColor: cssStyle?.button1?.background,
    },
    btn1Text: { ...styles.btn1Text, color: cssStyle?.button1?.color },
    btn2Text: { ...styles.btn2Text, color: cssStyle?.button2?.color },
    button2: {
      ...styles.button2,
      color: cssStyle?.button2?.color,
      backgroundColor: cssStyle?.button2?.background,
      borderColor: cssStyle?.button2?.color,
    },
  };

  return (
    <View style={styles.primeFeatureContainer}>
      <Card
        containerStyle={styles.primeCardContainer}
        wrapperStyle={styles.primeCardWrapper}
      >
        <Card.Title style={styles.cardHeader}>{title}</Card.Title>
        <View style={styles.content}>
          {content.map((data) => (
            <TouchableHighlight
              key={data.id}
              style={styles.touchHighlight}
              onPress={() => onIconClick(data.actionKey)}
            >
              <Svg height="75" width="75">
                <View style={styles.primeOptions}>
                  {data.imgSrc && (
                    <>
                      <Svg height="50%" width="50%" viewBox="0 0 100 100">
                        <Defs>
                          <ClipPath id="clip">
                            <Circle cx="50" cy="50" r="50" />
                          </ClipPath>
                        </Defs>
                        <Image
                          href={data.imgSrc}
                          width="100%"
                          height="100%"
                          preserveAspectRatio="xMidYMid slice"
                          clipPath="url(#clip)"
                        />
                        <Circle
                          cx="50"
                          cy="50"
                          r="50"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </Svg>
                    </>
                  )}
                  {data.name && (
                    <>
                      <Icon
                        name={data.name}
                        color={data.color}
                        type={data.type}
                        style={styles.svgIcon}
                      />
                    </>
                  )}

                  <Text style={styles.primeLabel1}>{data.label1}</Text>
                  <Text style={styles.primeLabel2}>{data.label2}</Text>
                </View>
              </Svg>
            </TouchableHighlight>
          ))}
        </View>

        {buttonDetail && (
          <View style={styles.buttonContainer}>
            {buttonDetail.title1 && (
              <TouchableOpacity
                style={[styles.button, styles.button1]}
                onPress={() => onIconClick(buttonDetail.title1)}
              >
                <Text style={[styles.btnText, styles.btn1Text]}>
                  {buttonDetail.title1}
                </Text>
              </TouchableOpacity>
            )}
            {buttonDetail.title2 && (
              <TouchableOpacity
                style={[styles.button, , styles.button2]}
                onPress={() => onIconClick(buttonDetail.title2)}
              >
                <Text style={[styles.btnText, styles.btn2Text]}>
                  {buttonDetail.title2}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </Card>
    </View>
  );
};

var styles = StyleSheet.create({
  primeFeatureContainer: {
    paddingBottom: "4%",
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
    paddingBottom: "2%",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems:"center"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: "2%",
    marginTop: "2%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "500",
  },
  button2: {
    borderWidth: 1,
  },
});

export default OptionCard;
