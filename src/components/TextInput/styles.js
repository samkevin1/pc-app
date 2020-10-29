import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from "react-native";
import { RFValue } from "../../helpers/fontSize";

const styles = StyleSheet.create({
  root: {},
  labelStyle: {
    backgroundColor: "#FC6620",
    // width: 120,
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: -10,
    marginLeft: 15,
    borderRadius: 2,
    fontSize: 14,
    zIndex: 1,
    color: "#fff",
  },
  inputStyle: {
    // width: "100%",
    // flex: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: "#FFF",
    borderBottomWidth: 0,
    fontSize: 15,
  },
  iconLeftStyle: {
    padding: 10,
    paddingRight: 0,
  },
  iconRightStyle: {
    padding: 10,
    paddingLeft: 0,
  },
  inputContainerErrorStyle: {},
  errorStyle: {
    color: "red",
    marginHorizontal: 8,
    fontSize: RFValue(12),
    marginBottom: 10,
  },
});

export default styles;
