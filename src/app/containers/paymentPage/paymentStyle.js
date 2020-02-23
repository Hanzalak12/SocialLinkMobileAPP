import {StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
const imageWidth = Dimensions.get('window').width / 3;

const color = {
  periwinkleBlue: '#9e95fe',
};

const PaymentStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#ffffff',
    
  },
  viewBoxTop: {
    justifyContent: 'center',
    // marginVertical: 20,
    alignItems: 'center',
    // backgroundColor:'red',
    marginBottom: 5,
    width: width,
    height: 70,
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width / 2 - 60,
    marginTop: 5,
    marginBottom: 15,
    width: 100,
    height: 70,
},
logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
},
  Logoimage: {
    width: imageWidth,

    width: width,
    height: 90,
    resizeMode: 'contain',
  },
  label: {
    borderWidth: 1,
    width: '40%',
    padding: 3,
    marginHorizontal: 20,
  },
  InputView: {
    borderWidth: 1,
    width: '60%',
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  InputViewNor: {
    borderWidth: 1,
    width: '40%',
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  InputViewSmall: {
    borderWidth: 1,
    width: '22%',
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  TextInputStyle: {
    flex: 1,

    justifyContent: 'center',
  },
  centerView: {
    flexDirection: 'row',
  },
  centerImage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default PaymentStyle;