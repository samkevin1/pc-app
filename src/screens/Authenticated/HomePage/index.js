import React, { useState, useEffect } from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { Card } from 'react-native-paper';
import { axios } from 'axios';

import { handleLogout, getUser } from '../../../services/authJwt';
import styles from './styles';
import DATA from '../data';
import api, { eps } from '../../../services/api';

const HomePage = ({ navigation }) => {



  const verticalRenderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem bottomDivider
                onPress={() => navigation.navigate('Details', {id: item.id})}
      >
        <Avatar source={{uri: item.img}} />
        <ListItem.Content>
          <ListItem.Title style={styles.text}>{item.title}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
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
                onPress={() => navigation.navigate('Details', {id: item.id})}
      >
        <Avatar source={{uri: item.img}} />
        <ListItem.Content>
          <ListItem.Title style={styles.text}>{item.title}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
          <ListItem.Subtitle style={styles.aVista}>R$ {item.vista},00 á vista</ListItem.Subtitle>
          <ListItem.Subtitle>R$ {item.prazo},00 em até 12x</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.oferta}>
        <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 10}}>Ofertas</Text>
        <FlatList
          horizontal
          data={DATA}
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
          data={DATA}
          renderItem={verticalRenderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

export default HomePage;
