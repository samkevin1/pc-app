import React, {useState, useRef, useEffect} from 'react';
import { View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TextInput, Card, Text, DefaultTheme, Button } from 'react-native-paper';
import Constants from 'expo-constants';
import styles from './styles';
import api, { eps } from '../../../services/api';
import { handleLogin } from '../../../services/authJwt';
import { Formik } from 'formik';

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

const Login = ({navigation}) => {

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        api.post(eps.signIn, values).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                handleLogin(res.data.token, res.data.user._id);
                navigation.navigate("Home", { user: res.data.user });
            }
          })
        }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>
            <View style={{margin: 15}}>
              <View style={{alignItems:'center', marginTop:100}}>
                <Text style={styles.title}>Login</Text>
                  <TextInput style={styles.input}
                              placeholder='Email'
                              underlineColor='#D3D3D3'
                              value={values.email}
                              onChangeText={handleChange('email')}
                              theme={theme}
                  />
                  <TextInput style={styles.input}
                          placeholder='Senha'
                          underlineColor='#D3D3D3'
                          theme={theme}
                          onChangeText={handleChange('password')}
                          value={values.password}
                          secureTextEntry={true}
                  />
                  <TouchableOpacity theme={theme} disabled={(values.email === '' || values.password === '')}>
                    <Button mode='contained'
                            children='Entrar'
                            style={(values.email === '' || values.password === '') ? styles.disabledButton : styles.button}
                            uppercase={false}
                            labelStyle={styles.labelStyle}
                            contentStyle={styles.contentStyle}
                            theme={theme}
                            onPress={handleSubmit}
                    />
                  </TouchableOpacity>
                  <View style={styles.orContainer}>
                    <View style={styles.leftHr}/>
                    <Text style={styles.or}>Ou</Text>
                    <View style={styles.rightHr}/>
                  </View>
                  <View style={{marginTop: 15, flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600'}}>Ainda não tem uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                      <Text style={{fontWeight: 'bold', color: '#0645AD'}}>Crie uma aqui</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
                    <View style={styles.lastHr}/>
                  </View>
              </View>
            </View>
          </View>
        )
      }
    </Formik>
  );
};

export default Login;
