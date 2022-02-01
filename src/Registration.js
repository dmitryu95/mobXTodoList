import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import { Network } from "./source/Network";
import { styles } from "./styles/AuthStyles"

export default function Registration({ navigation }) {

  const openAuth = () => {
    navigation.navigate("Auth");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ButtonAccept = async (email, password) => {
     if(email && password !== "") {
      try {
          Network("Users", "POST", {email, password})
          .then( response => {
            (response.id)
            ? (Alert.alert("",`Пользователь сохранен, можете авторизироваться`),
              openAuth())
            : Alert.alert("",`Ошибка, возможно пользователь существует `)})
      } catch(error) {
          console.log("error", error)
      }
  } else Alert.alert("","Заполните все поля") 
  setEmail('')
  setPassword('')
  };


  return (
    <View style={styles.main}>
      <Text style={styles.auth}>Регистрация</Text>
      <View style={styles.loginPass}>
        <Text style={styles.text}>Придумайте логин(Email)</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Введите ваш Email"
        />
      </View>
      <View style={styles.loginPass}>
        <Text style={styles.text}>Придумайте пароль</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Введите ваш пароль"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => ButtonAccept(email, password)}
      >
        <Text style={{ fontSize: 18 }}>Принять</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEnter} onPress={() => openAuth()}>
        <Text style={{ fontSize: 20 }}>Авторизация</Text>
      </TouchableOpacity>
    </View>
  );
}


