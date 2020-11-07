import * as React from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { Card } from 'react-native-paper';
import styles from './styles';

const DATA = [
  {
    id: '1',
    img: '../../../helpers/imgs/pc1.jpg',
    title: 'Computador Valorant Raze , i3-9100F, GeForce GTX 1650 4GB, 8GB...',
    details: 'R$ 2500'
  },
  {
    id: '2',
    img: '../../../helpers/imgs/pc2.jpg',
    title: 'Computador Samsung , i5-9100F, GeForce GTX 3080 10GB, 16GB...',
    details: 'R$ 3000'
  },
  {
    id: '3',
    img: '../../../helpers/imgs/pc3.jpg',
    title: 'Computador Dell , i7-9100F, GeForce GTX 3090 24GB, 32GB...',
    details: 'R$ 3500'
  },
];

const HomePage = () => {


  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem bottomDivider>
        <Avatar source={{uri: item.img}} />
        <ListItem.Content>
          <ListItem.Title style={styles.text}>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.details}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default HomePage;
