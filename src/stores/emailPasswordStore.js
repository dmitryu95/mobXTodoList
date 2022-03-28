import {action, makeObservable, observable} from 'mobx';
import {Alert} from 'react-native';
import {Network} from '../source/Network';
import {StoreToDo} from './noteStore';

class EmailPasswordStore {
  constructor() {
    (this.email = ''),
    (this.password = ''),
    (this.response = ''),
        makeObservable(this, {
            response: observable,
            email: observable,
            password: observable,
            setEmail: action.bound,
            setPassword: action.bound,
            delEmail: action,
            delPassword: action,
            buttonAccept: action.bound,
            replace: action.bound,
            getEmail: action.bound,
        });
  }

  setEmail(text) {
    this.email = text;
  }

  setPassword(text) {
    this.password = text;
  }

  delEmail() {
    this.email = '';
  }

  delPassword() {
    this.password = '';
  }

  buttonAccept({navigation}, url, method, page) {
    if (this.email && this.password !== '') {
      try {
        Network(url, '', method, {
          email: this.email,
          password: this.password,
        }).then(response => {
          if (response.id) {
            Alert.alert('', `Пользователь авторизован`);
            this.response = response.id;
            StoreToDo.id = this.response;
            if (this.response !== '') navigation.navigate(page);
          } else
            Alert.alert('', `Ошибка, возможно пользователь не существует `);
        });
      } catch (error) {
        console.log('error', error);
      }
    } else Alert.alert('', 'Заполните все поля');
    this.delPassword();
  }

  getEmail() {
    Network('Users/logout?access_token=', this.response, 'GET').then(
      response => (this.email = response.email),
    );
  }

  replace({navigation}) {
    Network('Users/logout?access_token=', this.response, 'POST').then(
      response => console.log('ответ что кого', response),
    );
    Network('Users/logout?access_token=', StoreToDo.id, 'POST');
    navigation.navigate('Auth');
  }
}

export const Store = new EmailPasswordStore();
