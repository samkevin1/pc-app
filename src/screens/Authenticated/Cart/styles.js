import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
    height: '100%',
    padding: 15
  },
  iconContainer: {
    flexDirection: 'row', 
    marginLeft: 15, 
    marginBottom: 5, 
  },
  headerText: {
    fontSize: 20,
    marginLeft: 15
  },
  container: {
    height:'100%',
    marginTop: 20,
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
});

export default styles;
