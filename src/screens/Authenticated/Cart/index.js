import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ListItem, Icon, Avatar } from 'react-native-elements';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import Header from "../../../components/Header/index";
import GoBack from "../../../components/GoBack/index";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();

  const { cartProducts } = useSelector((s) => s.cart);

  const renderProduct = ({ item }) => (
    <TouchableOpacity>
      <ListItem bottomDivider
        onPress={() => navigation.navigate('Details', { product: item })}
      >
        <Avatar source={{uri: item.imagem}} />
        <ListItem.Content>
          <ListItem.Title style={styles.text}>{item.nome}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
          <ListItem.Subtitle style={styles.aVista}>R$ {item.vista},00 á vista</ListItem.Subtitle>
          <ListItem.Subtitle>R$ {item.prazo},00 em até 12x</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <>
      <Header page={'Seu carrinho'} />
      <GoBack navigation={navigation} />
      <ScrollView style={styles.container}>
        <FlatList
          data={cartProducts}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </>
  );
};

export default Cart;
