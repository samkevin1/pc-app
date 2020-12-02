import React from 'react';
import { View, FlatList, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import styles from './styles';
import DATA from '../data';
import Header from "../../../components/Header/index";
import GoBack from "../../../components/GoBack/index";
import { UseLangContext } from '../../../contexts/LangContext';

import {
  useSelector
} from 'react-redux';

const MyPurchases = ({ navigation }) => {
  const { texts } = UseLangContext();
  const { products } = useSelector((s) => s.product);
  
  const verticalRenderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{uri: item.imagem}} />
      <ListItem.Content>
        <ListItem.Title style={styles.text}>{item.nome}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
        <ListItem.Subtitle style={styles.aVista}>R$ {item.vista},00 {texts.a_vista}</ListItem.Subtitle>
        <ListItem.Subtitle>R$ {item.prazo},00 {texts.em_ate} 12x</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <>
      <Header page={texts.meus_pedidos} />
      <GoBack navigation={navigation} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.destaque}>
            <FlatList
              data={products.filter(p => p.oferta == true)}
              renderItem={verticalRenderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default MyPurchases;
