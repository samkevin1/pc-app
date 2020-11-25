import React from 'react';
import {Text, View, FlatList, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Icon, Avatar, ListItem} from 'react-native-elements';
import styles from './styles';

import Header from "../../../components/Header/index";
import GoBack from "../../../components/GoBack/index";

import { addToCart } from "../../../store/actions/cart/index";
import { useDispatch } from "react-redux";

const Details = ({ navigation, route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const price = parseInt(product.vista) + 500;
  const discount = Math.round((parseInt(product.prazo) - parseInt(product.vista)) / parseInt(product.prazo) * 100);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    Alert.alert("Sucesso", "Produto adicionado ao carrinho com sucesso.");
  }

  return(
    <ScrollView>
      <Header page={"Detalhes do produto"} />
      <GoBack navigation={navigation} />
      <Avatar source={{uri: product.imagem}} containerStyle={{ width: '100%', height: 250}}/>
      <View style={styles.modalTitle}>
        <Text style={styles.title}>{product.nome}, {product.processador}, {product.placaVideo}, {product.ram}</Text>
      </View>
      <View style={{ margin: 10 }}>
        <View style={styles.modal}>
          <Text style={styles.fadedText}>De <Text style={styles.strikeThrough}>R$ {price},00</Text> por</Text>
          <Text style={styles.aVista}>R$ {product.vista},00 <Text style={styles.aVistaText}>á vista</Text></Text>
          <View style={{flexDirection: 'row', marginLeft:10}}>
            <Icon
              containerStyle={styles.icon}
              name='ios-pricetag'
              type='ionicon'
            />
            <Text style={{marginLeft:10, marginTop: 2}}>R$ {product.vista},00 no boleto. {discount}% de desconto</Text>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Icon
              containerStyle={styles.icon}
              name='ios-card'
              type='ionicon'
            />
            <Text style={{marginLeft:10, marginTop: 2}}>R$ {product.prazo},00 em até 12x</Text>
          </View>
        </View>
        <View style={styles.modal}>
          <TouchableOpacity style={{margin: 10, alignSelf:'flex-start', flexDirection: 'row'}} onPress={() => handleAddToCart(product)}>
            <Icon
              name='ios-cart'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
            />
            <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: '#0645AD'}}>Adicionar ao carrinho e continuar comprando</Text>
          </TouchableOpacity>
          <View style={{borderBottomWidth: 0.4, width: '80%', alignSelf: 'center'}}/>
          <TouchableOpacity style={{margin: 10, alignSelf:'flex-start', flexDirection: 'row'}}>
            <Icon
              name='ios-pricetag'
              type='ionicon'
              iconStyle={{color: '#0645AD'}}
            />
            <Text style={{marginLeft:10, marginTop: 2, fontWeight: 'bold', color: '#0645AD'}}>Ir direto para o pagamento</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modal}>
          <Text style={styles.text}>Especificações</Text>
          <Text style={styles.specifications}>Marca: {product.title}</Text>
          <Text style={styles.specifications}>Processador: {product.processador}</Text>
          <Text style={styles.specifications}>Ram: {product.ram}</Text>
          <Text style={styles.specifications}>Placa de vídeo: {product.placaVideo}</Text>
        </View>
      </View>
    </ScrollView>
  )
};

export default Details;
