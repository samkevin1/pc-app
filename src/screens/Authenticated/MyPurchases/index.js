import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { axios } from 'axios';

import { handleLogout, getUser } from '../../../services/authJwt';
import styles from './styles';
import DATA from '../data';

import Header from "../../../components/Header/index";
import GoBack from "../../../components/GoBack/index";

const MyPurchases = ({ navigation }) => {

  const verticalRenderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar source={{uri: item.img}} />
      <ListItem.Content>
        <ListItem.Title style={styles.text}>{item.title}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
        <ListItem.Subtitle style={styles.aVista}>R$ {item.vista},00 á vista</ListItem.Subtitle>
        <ListItem.Subtitle>R$ {item.prazo},00 em até 12x</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <>
      <Header page={"Meus pedidos"} />
      <GoBack navigation={navigation} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.destaque}>
            <FlatList
              data={DATA}
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
