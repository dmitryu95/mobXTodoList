import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {StoreToDo} from './stores/noteStore';
import {inject, observer} from 'mobx-react';
import {styles} from './styles/ConfirmationStyles';

const Confirmation = inject('StoreToDo')(
  observer(() => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true} //полное перекрытие
          visible={StoreToDo.aceept}
          onRequestClose={() => StoreToDo.setAccept(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Отменить изменения?</Text>
              <View style={styles.buttonHorizont}>
                <TouchableOpacity
                  style={[styles.button, styles.buttonAccept]}
                  onPress={() => {
                    StoreToDo.setAccept(false), StoreToDo.setVisible(false);
                  }}>
                  <Text style={styles.textStyle}>Да</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => StoreToDo.setAccept(false)}>
                  <Text style={styles.textStyle}>Нет</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }),
);

export default Confirmation;
