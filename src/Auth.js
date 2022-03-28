import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles/AuthStyles';
import {observer, inject} from 'mobx-react';
import {Store} from './stores/emailPasswordStore';

const Auth = inject(
  'Store',
  'StoreToDo',
)(
  observer(({navigation}) => {
    // БЛОК НАВИГАЦИИ
    const openRegistration = () => {
      navigation.navigate('Registration');
    };

    React.useEffect(
      () =>
        navigation.addListener('focus', () =>
          Store.replace({navigation}, Store.delEmail()),
        ),
      [],
    );

    return (
      <View style={styles.main}>
        <Text style={styles.auth}>Авторизация</Text>
        <View>
          <View style={styles.loginPass}>
            <Text style={styles.text}>Логин:</Text>
            <TextInput
              style={styles.input}
              value={Store.email}
              onChangeText={text => Store.setEmail(text)}
              placeholder="Введите логин..."></TextInput>
          </View>
          <View style={styles.loginPass}>
            <Text style={styles.text}>Пароль:</Text>
            <TextInput
              style={styles.input}
              value={Store.password}
              onChangeText={text => Store.setPassword(text)}
              placeholder="Введите пароль..."></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                Store.buttonAccept({navigation}, 'Users/login', 'POST', 'Notes')
              }>
              <Text style={{fontSize: 18}}>Принять</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonEnter}>
            <TouchableOpacity onPress={() => openRegistration()}>
              <Text style={{fontSize: 20}}>Регистрация</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }),
);
export default Auth;
