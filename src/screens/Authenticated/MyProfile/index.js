import React, { useRef, useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Animated, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, Avatar, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import Text from '../../../components/Text/index';
import Colors from '../../../constants/color';
import { ActivityIndicator } from 'react-native-paper';

const MyProfile =({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView style={{ margin: 15 }}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon
              name='ios-arrow-round-back'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
              containerStyle={{marginTop: 3}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Meu Perfil</Text>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={{ alignSelf: 'center' }}>
            <Icon
              name='ios-contact'
              type='ionicon'
              size={120}
            />
          </View>
          <Text style={styles.title}>
            Nome do usuário
          </Text>
          <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate("EditPage")}>
            <View style={styles.button}>
              <Text style={styles.label}>EDITAR</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-albums'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>Meus pedidos</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:43 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>Veja todos seus pedidos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate("EditPage")}>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-person'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>Dados pessoais</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:38 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>Altere senha, email e dados pessoais</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfile;
