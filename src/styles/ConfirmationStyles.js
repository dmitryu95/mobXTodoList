import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  modalView: {
    margin: '10%',
    backgroundColor: '#d9d2d3',
    borderRadius: 20,
    padding: '10%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonHorizont: {
    flexDirection: 'row',
    alignItems: 'space-between',
  },
  button: {
    borderRadius: 10,
    width: '30%',
    padding: 10,
    marginHorizontal: '10%',
  },
  buttonAccept: {
    backgroundColor: '#ba223d',
  },
  buttonClose: {
    backgroundColor: '#02b028',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'black',
    marginBottom: '10%',
    fontSize: 18,
    textAlign: 'center',
  },
});

export {styles};
