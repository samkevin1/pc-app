import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import styles from './styles';
import Text from '../../../components/Text/index';
import { Icon } from 'react-native-elements'
import { TextInput, DefaultTheme } from 'react-native-paper';
import { Formik } from 'formik';
import { UseLangContext } from '../../../contexts/LangContext';
import { useSelector, useDispatch } from 'react-redux';
import { api, eps } from '../../../services/api';
import{
  updateUser,
  setValue
} from '../../../store/actions/auth/index';

const EditData =({ navigation }) => {
  const { texts } = UseLangContext();
  const dispatch = useDispatch();

  const { user } = useSelector((s) => s.auth);

  const theme = {
    ...DefaultTheme,
    roundness: 3,
    colors: {
      ...DefaultTheme.colors,
      primary: '#696969',
      accent: 'white',
      disabled: 'white',
      text: '#676C6B'
    },
  };

  const [newUser, setNewUser] = useState(user);

  useEffect(() => {
    setNewUser(user)
  }, [user]);

  const handleSubmit = () => dispatch(updateUser(newUser, (err, res) => {
    if(err) {
      Alert.alert(texts.atencao, "Erro ao editar dados do usuário");
    } else {
      Alert.alert(texts.atencao, "Perfil alterado com sucesso.");
    }
  }));
 
  const handleChangeUser = (id, value) => setNewUser({ ...newUser, [id]: value });
  
  return (
    <View style={styles.container}>
      <View style={{ margin: 15 }}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon
              name='ios-arrow-round-back'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
              containerStyle={{marginTop: 3}}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>{texts.edit_data}</Text>
        </View>
        <View style={{marginTop: 10}} />
        <View style={styles.modal}>
          <View>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_nome}</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder={texts.novo_nome}
              underlineColor='#D3D3D3'
              value={newUser?.nome}
              onChangeText={v => handleChangeUser('nome', v)}
              theme={theme}
            />
          </View>
        </View>
        <View style={styles.modal}>
          <View>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_sobrenome}</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder={texts.novo_sobrenome}
              underlineColor='#D3D3D3'
              value={newUser?.sobrenome}
              onChangeText={v => handleChangeUser('sobrenome', v)}
              theme={theme}
            />
          </View>
        </View>
        <View style={styles.modal}>
          <View>
            <View style={{  marginLeft:10, marginTop:10, alignSelf:'flex-start', flexDirection: 'row' }}>
              <Text style={{marginLeft:5, color: '#999999'}}>{texts.novo_cpf}</Text>
            </View>
            <TextInput 
              style={styles.input}
              placeholder={texts.novo_cpf}
              underlineColor='#D3D3D3'
              value={newUser?.cpf}
              onChangeText={v => handleChangeUser('cpf', v)}
              theme={theme}
            />
          </View>
        </View>
        <TouchableOpacity 
          style={{alignSelf: 'flex-end', marginTop: 320 }} 
          onPress={handleSubmit}
        >
          <Icon
            name='ios-checkmark-circle'
            type='ionicon'
            iconStyle={{color: '#0645AD'}}
            size={80}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditData;

