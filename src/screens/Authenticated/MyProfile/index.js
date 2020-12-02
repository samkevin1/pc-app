import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import Text from '../../../components/Text/index';
import Header from "../../../components/Header/index";
import GoBack from "../../../components/GoBack/index";
import { UseLangContext } from '../../../contexts/LangContext';
import { useSelector } from "react-redux";

const MyProfile =({ navigation }) => {
  const { texts } = UseLangContext();
  const { user }  = useSelector((s) => s.auth);

  return (
    <View style={styles.container}>
      <Header page={texts.meu_perfil} />
      <GoBack navigation={navigation} />
      <ScrollView style={{ margin: 15 }}>
        <View>
          <View style={{ alignSelf: 'center' }}>
            <Icon
              name='ios-contact'
              type='ionicon'
              size={120}
            />
          </View>
          <Text style={styles.title}>
            {user.nome} {user.sobrenome}
          </Text>
          <TouchableOpacity style={{ marginTop: 15 }} onPress={() => navigation.navigate("EditPage")}>
            <View style={styles.button}>
              <Text style={styles.label}>{texts.editar}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate("MyPurchases")}>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-albums'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>{texts.meus_pedidos}</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:43 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>{texts.veja_pedidos}</Text>
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
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>{texts.dados_pessoais}</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:38 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>{texts.alterar_dados}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfile;
