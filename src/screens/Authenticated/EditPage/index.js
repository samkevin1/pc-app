import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styles from './styles';
import Text from '../../../components/Text/index';
import TextInput from '../../../components/TextInput/index';
import { Button, Avatar, Icon } from 'react-native-elements'

const EditPage =({ navigation }) => {

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
          <Text style={styles.headerText}>Editar Dados</Text>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate("EditPassword")}>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-lock'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>Alterar senha</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:35 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>Altere sua senha</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => navigation.navigate("EditData")}>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Icon
                name='ios-card'
                type='ionicon'
                iconStyle={{color: '#0645AD'}}
              />
              <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: 'black'}}>Alterar dados pessoais</Text>
            </View>
            <Text style={{ marginBottom: 10, marginLeft:41 ,alignSelf:'flex-start', color: '#999999', fontSize:12 }}>Altere seu nome, gênero, etc</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditPage;

