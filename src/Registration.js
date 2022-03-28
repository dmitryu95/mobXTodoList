import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles/AuthStyles';
import {Store} from './stores/emailPasswordStore';
import {observer, inject} from 'mobx-react';

const Registration = inject('Store')(
  observer(({navigation}) => {
    const openAuth = () => {
      navigation.navigate('Auth');
    };

    return (
      <View style={styles.main}>
        <Text style={styles.auth}>Регистрация</Text>
        <View style={styles.loginPass}>
          <Text style={styles.text}>Придумайте логин(Email)</Text>
          <TextInput
            style={styles.input}
            value={Store.email}
            onChangeText={text => Store.setEmail(text)}
            placeholder="Введите логин..."/>
        </View>
        <View style={styles.loginPass}>
          <Text style={styles.text}>Придумайте пароль</Text>
          <TextInput
            style={styles.input}
            value={Store.password}
            onChangeText={text => Store.setPassword(text)}
            placeholder="Введите пароль..."/>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Store.buttonAccept(
              {navigation},
              'Users?access_token=',
              'POST',
              'Auth',
            )
          }>
          <Text style={{fontSize: 18}}>Принять</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonEnter} onPress={() => openAuth()}>
          <Text style={{fontSize: 20}}>Авторизация</Text>
        </TouchableOpacity>
      </View>
    );
  }),
);

export default Registration;
