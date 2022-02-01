import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "./styles/TodoListStyles";
import CheckBox from "@react-native-community/checkbox";

const TodoItem = ({ item, deleteNote }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [text, onChangeText] = useState(item.title);

  return (
    <View style={styles.main}>
      <View style={styles.list}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <TextInput
          style={styles.textBlock}
          value={text}
          onChangeText={(text) => onChangeText(text)}
          placeholder={item.title}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonDel}
        onPress={() => deleteNote(item.id)}>
        <Text style={styles.del}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
