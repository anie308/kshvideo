import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex:1,
  },
  containerMain: {
    paddingHorizontal: 20,
    flex: 1,
  },

  headerText: {
    fontSize: 28,
    color: "darkslategray",
    textAlign: "center",
    fontFamily: "lato_bold",
  },
  normalText: {
    marginTop: 20,
    fontWeight: "100",
    fontSize: 15,
    color: "darkslategray",
    textAlign: "center",
    fontFamily: "lato",
  },
  emailButton: {
    backgroundColor: "#F6BE00",
    marginTop: 50,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  
  altCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50,
  },
  altLine: {
    height: 1,
    width: "28%",
    backgroundColor: "lightgray",
  },

  altText: {
    textAlign: "center",
    fontFamily: "lato",
    marginHorizontal: 15,
  },
  socialCon: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  socialButton: {
    marginHorizontal: 10,
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    borderStyle: "solid",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "lightgray",
  },
  logButtonCon: {
    marginTop: 50,
  },
  logOptionButton: {
    borderColor: "lightgray",
    borderWidth: 1,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  logButtonText: {
    color: "black",
    fontFamily: "lato",
  },
  containerBottomButton: {
    backgroundColor: "ghostwhite",
    padding: 20,
    alignItems: "center",
    borderStyle: "solid",
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  buttonText: {
    fontFamily: "lato",
  },
  bottomButtonText: {
    color: "#F6BE00",
    fontFamily: "lato_bold",
  },
});

export default styles;
