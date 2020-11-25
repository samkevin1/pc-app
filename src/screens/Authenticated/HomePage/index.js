import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { axios } from 'axios';

import { handleLogout, getUser } from '../../../services/authJwt';
import styles from './styles';

import Header from "../../../components/Header/index";

import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../store/actions/product/index';

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const verticalRenderItem = ({ item }) => (
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

  const horizontalRenderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem containerStyle={{width: 300, color: '#ccc', borderRadius: 5, borderColor: '#ccc'}}
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
    <ScrollView>
      <Header page={"Home"}/>
      <View style={styles.container}>
        <View style={styles.oferta}>
          <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 10}}>Ofertas</Text>
          <FlatList
            horizontal
            data={products.filter(p => p.oferta == true)}
            renderItem={horizontalRenderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    height: "100%",
                    width: 20,
                    backgroundColor: "#f5f5f5",

                  }}
                />
              );
            }}
          />
        </View>
        <View style={styles.destaque}>
          <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 10}}>Produtos em destaque</Text>
          <FlatList
            data={products}
            renderItem={verticalRenderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomePage;
