import {action, makeObservable, observable} from 'mobx'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { Network } from '../source/Network'

class EmailPasswordStore {
    constructor() {
        this.email = '',
        this.password = ''
        makeObservable(this, {
            email: observable,
            password: observable,
            setEmail: action.bound,
            setPassword: action.bound,
            delEmail: action,
            delPassword: action,
            buttonAccept: action.bound
        }) 
    }

    setEmail(text) {
        this.email = text
        console.log("Email", this.email);
    }

    setPassword(text) {
        this.password = text
    }

    delEmail() {
        this.email = ''
    }

    delPassword() {
        this.password = ''
    }

    buttonAccept() {
        console.log("email, password", this.email, this.password);
        if (this.email && this.password !== "") {
            try { 
                Network("Users/login",'', "POST", {
                    email: this.email, 
                    password: this.password
                })
                .then( response => {
                    if(response.id) {
                        Alert.alert("",`Пользователь авторизован`)
                        return openNotes(response) 
                    } 
                    else  return Alert.alert("",`Ошибка, возможно пользователь не существует `)
                })
            } catch(error) {
                console.log("error", error)
            }
        } else Alert.alert("","Заполните все поля") 
        this.delEmail;
        this.delPassword;
    }
}

// const EmailPasswordStore = (email, password) => {
//     return makeObservable({
//         email: 0,
//         password: 0,
//         setEmail(email) { this.email = email },
//         delEmail() { this.email= "" },
//         setPassword(password) { this.password = password },
//         delPassword() { this.password = ""},
//     },{
//         email: observable,
//         password: observable,
//         setEmail: action,
//         delEmail: action,
//         setPassword: action,
//         delPassword: action
//     })
// }

export default EmailPasswordStore;