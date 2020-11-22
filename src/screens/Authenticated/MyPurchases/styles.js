import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    height:'100%',
    marginTop: 40,
    margin: 15
  },
  item: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    fontWeight: '700'
  },
  aVista: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 17
  },
  destaque: {
    flex: 3,
    backgroundColor: '#f5f5f5'
  },
  oferta: {
    flex: 1,
    borderColor: '#ccc',
  },
  leftHr: {
    borderBottomWidth: 0.5,
    borderColor:'black'
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20
  },

});

export default styles;
