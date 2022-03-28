import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/TodoListStyles';
import {StoreToDo} from './stores/noteStore';
import {observer, inject} from 'mobx-react';

const TodoItem = inject('StoreToDo')(
  observer(({item, backgroundColor}) => {
    return (
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.end}
          onPress={() => StoreToDo.setVisible(true, item.id, item.title)}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>
        <View style={[styles.list, {backgroundColor: backgroundColor}]}>
          <TouchableOpacity
            style={styles.textBlock}
            onPress={() => StoreToDo.setCompleteTask(item)}>
            <Text style={[styles.textBlock, styles.text]}>{item.title}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonDel}
          onPress={() => StoreToDo.deleteNote(item.id)}>
          <Text style={styles.del}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }),
);

export default TodoItem;
