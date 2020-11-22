import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { axios } from 'axios';

import { handleLogout, getUser } from '../../../services/authJwt';
import styles from './styles';
import DATA from '../data';
import api, { eps } from '../../../services/api';

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
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon
              name='ios-arrow-round-back'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
              containerStyle={{marginTop: 3}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Meus Pedidos</Text>
        </View>
        <View style={styles.destaque}>
          <FlatList
            data={DATA}
            renderItem={verticalRenderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default MyPurchases;
