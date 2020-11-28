import React, { useState } from 'react';
import {
   Text, 
   View,
   Alert
} from 'react-native';
import { STEPS } from './formSteps';
import TextInput from '../../../components/TextInput/index';
import SimpleStep from '../../../components/SimpleStep/index';
import { Button } from "react-native-elements";
import styles from './styles';
import {
  useDispatch,
  useSelector
} from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  registerUser
} from "../../../store/actions/auth/index";
import { UseLangContext } from "../../../contexts/LangContext";

const UserRegister = () => {
  const dispatch = useDispatch();
  const { texts } = UseLangContext();
  const { loading } = useSelector((s) => s.auth);
  const [currentStep, setCurrentStep]  = useState(STEPS.find((s) => s.value === 1));
  const navigation = useNavigation();

  const [user, setUser] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    senha: '',
    confirmPassword: ''
  });

  const handleSubmit = () => {
    console.log('user', user)
    dispatch(
      registerUser(user, (err, res) => {
        if(err) {
          Alert.alert(texts.atencao, err);
        } else {
          Alert.alert(texts.usuario_criado);
          navigation.navigate('Login');
          console.log(res)
        }
      })
    )
  }
 
  const changeStep = async (action = "next", step) => {
    if(currentStep.value === STEPS[0].value && !user.nome && action === "next"){
      Alert.alert(texts.atencao, texts.inf_nome_warn);
    }
    else if(currentStep.value === STEPS[1].value && !user.sobrenome && action === "next"){
      Alert.alert(texts.atencao, texts.inf_sobrenome_warn);
    }
    else if(currentStep.value === STEPS[2].value && !user.email && action === "next"){
      Alert.alert(texts.atencao, texts.inf_email_warn);
    }
    else if(currentStep.value === STEPS[3].value && user.cpf < 1 && action === "next"){
      Alert.alert(texts.atencao, texts.inf_cpf_warn);
    }
    else if(currentStep.value === STEPS[4].value && !user.dataNascimento && action === "next"){
      Alert.alert(texts.atencao, texts.inf_data_nasc_warn);
    }
    else if(currentStep.value === STEPS[5].value && user.senha !== user.confirmPassword && action === "next"){
      Alert.alert(texts.atencao, texts.senha_n_coincidem);
    }
    else if(currentStep.value === STEPS[5].value && user.senha && user.confirmPassword && action === "next"){
      handleSubmit();
    }
    else {
      if(action === "next"){
        let nextStep = STEPS.find((s) => s.value === (currentStep.value + 1));
        setCurrentStep(nextStep);
      }
      else{
        setCurrentStep(step);
      }
    }
  }

  const handleChangeUser = (prop, value) => {
    setUser({
      ...user,
      [prop]: value
    });
  }

  const RegisterUserHead = () => (
    <View style={{ flexDirection: 'row' }}>
      <Text style={[styles.text, {fontWeight: '700', color:  "#0645AD"}]}>{user.nome} {user.sobrenome}, </Text>
    </View>);

  return(
    <View style={styles.container}>
      <View style={{margin: 15, marginTop: 50}}>
        <View style={{ flexDirection: "row"}}>
          {STEPS.map((s, idx) => (
            <SimpleStep key={idx} step={s} currentStep={currentStep} changeStep={changeStep}/>)
          )}
        </View>
        <View>
          {currentStep.value === STEPS[0].value && (
            <View style={{ marginTop: 35 }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text}>{texts.welcome}</Text>
                <Text style={[styles.text, {fontWeight: '700', color:  "#0645AD"}]}>{' '}{texts.loja_pc}</Text>
              </View>
              <Text style={styles.text}  type="text">
                {texts.inf_nome}
              </Text>
              <TextInput placeholder={texts.digite_aqui}
                         id="name"
                         type="text"
                         placeholderTextColor="#757575"
                         style={styles.stepInput}
                         value={user.nome}
                         onChangeText={(value) => handleChangeUser("nome", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[1].value && (
            <View style={{ marginTop: 35 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.text, {fontWeight: '700', color:  "#0645AD"}]} type="text">
                  {user.nome},
                </Text>
                <Text style={styles.text}>
                  {' '}{texts.inf_sobrenome}
                </Text>
              </View>
              <TextInput placeholder={texts.digite_aqui}
                         type="text"
                         id="lastName"
                         style={styles.stepInput}
                         value={user.sobrenome}
                         placeholderTextColor="#757575"
                         onChangeText={(value) => handleChangeUser("sobrenome", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[2].value && (
            <View style={{ marginTop: 35 }}>
              <RegisterUserHead />
              <Text style={styles.text} type="text">
                {texts.inf_email}
              </Text>
              <TextInput
                name="email"
                placeholder="email@site.com"
                keyboardType="email-address"
                style={styles.stepInput}
                placeholderTextColor="#757575"
                value={user.email}
                onChangeText={(value) => handleChangeUser("email", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[3].value && (
            <View style={{ marginTop: 35 }}>
              <RegisterUserHead />
              <Text style={styles.text} type="text">
                {texts.inf_cpf}
              </Text>
              <Text style={styles.textBold} type="text">
                ({texts.somente_num})
              </Text>
              <TextInput
                name="cpf"
                placeholder={texts.digite_aqui}
                style={styles.stepInput}
                placeholderTextColor="#757575"
                value={user.cpf}
                onChangeText={(value) => handleChangeUser("cpf", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[4].value && (
            <View style={{ marginTop: 35 }}>
              <Text style={styles.text} type="text">
                {texts.inf_data_nasc} {user.nome}?
              </Text>
              <TextInput
                placeholder={texts.digite_aqui}
                type={'datetime'}
                id="birthDate"
                keyboardType="date"
                style={styles.stepInput}
                enableMask
                placeholderTextColor="#757575"
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={user.dataNascimento}
                onChangeText={(value) => handleChangeUser("dataNascimento", value)}
              />
            </View>
          )}
          {currentStep.value === STEPS[5].value && (
            <View style={{ marginTop: 35 }}>
              <Text style={styles.text}>
                {texts.inf_senha}
              </Text>
              <TextInput
                placeholder={texts.digite_aqui}
                secureTextEntry
                password={true}
                id="password"
                placeholderTextColor="#757575"
                style={styles.stepInput}
                value={user.senha}
                onChangeText={(value) => handleChangeUser("senha", value)}
              />
              <TextInput
                placeholder={texts.confirma_senha}
                id="confirmPassword"
                secureTextEntry
                style={styles.stepInput}
                placeholderTextColor="#757575"
                value={user.confirmPassword}
                onChangeText={(value) => handleChangeUser("confirmPassword", value)}
              />
              <Text style={styles.specifications}>
                * {texts.uma_letra}
              </Text>
              <Text style={styles.specifications}>
                * {texts.um_numero}
              </Text>
              <Text style={styles.specifications}>
                * {texts.entre_oito_sessenta}
              </Text>
            </View>
          )}
        </View>
      </View>
      <Button
        icon={{
          name: currentStep.value === STEPS.length ? "save" : "keyboard-arrow-right",
          type: "font-awesome5",
          color: "#fff",
        }}
        buttonStyle={{
          backgroundColor:"#0645AD",
          // borderRadius: 40,
          height: 60,
          width: 60,
          borderRadius: 30,
        }}
        containerStyle={{
          position: "absolute",
          bottom: 24,
          right: 24,
        }}
        loading={loading.register}
        disabled={loading.register}
        onPress={() => changeStep("next", currentStep.value)}
      />
    </View>
  )
}

export default UserRegister;
