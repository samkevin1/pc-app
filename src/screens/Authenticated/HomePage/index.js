import React, { useCallback, useEffect } from 'react';
import {Text, View, FlatList,TouchableOpacity, ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import styles from './styles';
import Header from "../../../components/Header/index";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../store/actions/product/index';
import {UseLangContext} from "../../../contexts/LangContext";

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { lang, texts } = UseLangContext();
  const { products } = useSelector((s) => s.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const verticalRenderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem bottomDivider
        onPress={() => navigation.navigate('Details', { product: item })}
      >
        <Avatar source={{uri: item.imagem}} />
        <ListItem.Content>
          <ListItem.Title style={styles.text}>{item.nome}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
          <ListItem.Subtitle style={styles.aVista}>R$ {item.vista},00 {texts.a_vista}</ListItem.Subtitle>
          <ListItem.Subtitle>R$ {item.prazo},00 {texts.em_ate} 12x</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  const horizontalRenderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem containerStyle={{width: 300, color: '#ccc', borderRadius: 5, borderColor: '#ccc'}}
                onPress={() => navigation.navigate('Details', { product: item })}
      >
        <Avatar source={{uri: item.imagem}} />
        <ListItem.Content>
          <ListItem.Title style={styles.text}>{item.nome}, {item.processador}, {item.placaVideo}, {item.ram}...</ListItem.Title>
          <ListItem.Subtitle style={styles.aVista}>R$ {item.vista},00 {texts.a_vista}</ListItem.Subtitle>
          <ListItem.Subtitle>R$ {item.prazo},00 {texts.em_ate} 12x</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  const ProductVerticalList = useCallback(() => (
    <FlatList
      data={products}
      renderItem={verticalRenderItem}
      keyExtractor={item => item.id}
    />
  ), [lang]);

  return (
    <ScrollView>
      <Header page={texts.inicio}/>
      <View style={styles.container}>
        <View style={styles.oferta}>
          <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 10}}>{texts.ofertas}</Text>
          <FlatList
            horizontal
            data={products.filter(p => p.oferta == true)}
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
          <Text style={{fontSize: 15, fontWeight: '700', marginBottom: 10}}>{texts.produto_destaque}</Text>
          <ProductVerticalList />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomePage;
