import React from 'react';
import {Modal, View, TextInput, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import {StoreToDo} from './stores/noteStore';
import {styles} from './styles/AddNotesStyles';

const EditItem = inject('StoreToDo')(
  observer(() => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={StoreToDo.visible}
          onRequestClose={() => StoreToDo.setVisible(false)}>
          <View style={styles.inputeBlock}>
            <TextInput
              style={styles.input}
              value={StoreToDo.editTitle}
              onChangeText={text => StoreToDo.editItem(text)}
              placeholder={StoreToDo.itemTitle}
            />
          </View>
          <Button
            onPress={() => StoreToDo.acceptChange(StoreToDo.itemId)}
            title="Отправить"
          />
          <Button
            onPress={() => StoreToDo.setAccept(!StoreToDo.aceept)}
            title="Отменить"
          />
        </Modal>
      </View>
    );
  }),
);

export default EditItem;
