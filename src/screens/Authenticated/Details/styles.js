import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#f5f5f5',
    height: '100%'
  },
  modal: {
    backgroundColor: '#FFF',
    marginTop: 15,
    borderColor: '#ccc',
    borderWidth: 0.2,
    borderBottomWidth: 0.9,
    borderRadius: 5
  },
  modalTitle: {
    backgroundColor: '#FFF',
    borderColor: '#ccc',
    borderBottomWidth: 0.9,
  },
  item: {
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  fadedText: {
    fontWeight: '600',
    color: '#999999',
    fontSize: 15,
    margin: 10
  },
  text: {
    fontWeight: '700',
    fontSize: 17,
    margin: 10
  },
  aVista: {
    color: 'green',
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
    marginTop: 0
  },
  aVistaText: {
    color: 'green',
    fontSize: 15,
    fontWeight: '700',
    margin: 10,
    marginTop: 0
  },
  icon: {
    alignSelf: 'flex-start'
  },
  destaque: {
    flex: 3,
    backgroundColor: '#f5f5f5'
  },
  oferta: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  leftHr: {
    borderBottomWidth: 0.5,
    borderColor:'black'
  },

});

export default styles;
