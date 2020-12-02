import { StyleSheet } from 'react-native';
import color from '../../../constants/color';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
  button: {
    alignSelf: 'center',
    height: 24,
    width: 100,
    borderRadius: 16,
    justifyContent: 'center',
    color: "#FFFF",
    borderColor: color.primary.light,
    borderWidth: 0.6,
    backgroundColor: color.primary.primary
  },
  label: {
    color: "#FFF",
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '600'
  },
  playlistImage: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
  iconButton: {
    backgroundColor: 'transparent',
    // borderRadius: 40,
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  containerButton: {
    position: 'relative',
    bottom: 0,
    right: 15
  },
  containerButtonRight: {
    position: 'absolute',
    bottom: 0,
    right: -15
  },
  title: {
    fontWeight: 'bold',
    color: "#424242",
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20
  },
  countText: {
    fontWeight: "bold",
    color: "#424242"
  },
  countLabel: {
    color: "#424242",
    fontSize: 11, 
    fontWeight: 'bold'
  },
  countContainer: {
    alignItems: 'center',
    flex: 4
  },
  sectionTitle: {
    color: "#424242",
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  musicName: {
    color: "#424242", 
    fontSize: 14, 
    fontWeight: 'bold'
  },
  iconContainer: {
    flexDirection: 'row', 
    marginLeft: 15, 
    marginBottom: 5, 
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20
  },
  modal: {
    backgroundColor: '#FFF',
    marginTop: 15,
    borderColor: '#ccc',
    borderWidth: 0.2,
    borderBottomWidth: 0.9,
    borderRadius: 5, 
    flexDirection: 'row'
  },
});

export default styles;
