import { StyleSheet } from 'react-native';
import { RFValue } from '../../helpers/fontSize';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    padding: RFValue(10)
  },
  title: {
    fontSize: RFValue(14),
    marginLeft: RFValue(15),
    color: "#000"
  },
});

export default styles;