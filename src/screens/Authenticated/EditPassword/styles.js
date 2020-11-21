import { StyleSheet } from 'react-native';
import color from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingTop: 15
  },
  title: {
    fontWeight: 'bold',
    color: "#424242",
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20
  },
  modal: {
    backgroundColor: '#FFF',
    borderColor: '#ccc',
    borderWidth: 0.2,
    borderBottomWidth: 0,
    flexDirection: 'row'
  },
  input: {
    alignSelf: 'center',
    height: 40,
    width: 381,
    borderRadius: 4,
    borderColor: '#f5f5f5',
    borderWidth: 0.6,
    backgroundColor: '#f5f5f5',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 5
},
});

export default styles;
