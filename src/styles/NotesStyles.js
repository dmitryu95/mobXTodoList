import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  header: {
    flex: 0.35,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#bbbfbf',
    alignItems: 'center',
  },
  auth: {
    width: '20%',
    height: '95%',
    justifyContent: 'center',
    backgroundColor: 'green',
    marginHorizontal: '1%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'green',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  authTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  text: {
    fontSize: 28,
    color: 'black',
  },
  container: {
    flex: 5,
  },
});

export {styles};
