import { StyleSheet } from "react-native";

import { RFValue } from "../../helpers/fontSize";

const styles = StyleSheet.create({
  root: {
    padding: RFValue(6),
    paddingTop: RFValue(16),
    backgroundColor: "#FFF",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    padding: RFValue(8),
    marginTop: RFValue(24),
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    alignSelf: "center",
    height: RFValue(45),
    width: RFValue(80),
    marginTop: RFValue(26),
  },
  centerContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: RFValue(14),
    fontWeight: "bold",
    marginTop: RFValue(40),
    color: "#424242"
  }
});

export default styles;
