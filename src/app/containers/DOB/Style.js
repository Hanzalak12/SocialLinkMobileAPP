import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'flex-end',
        width: width,
        ...Platform.select({
            ios: {
                height: height ,
            },
            android: {
                height: height - 70 -  ( StatusBar.currentHeight ? StatusBar.currentHeight : 0 ),
            },
        }),
        backgroundColor: '#fff'
    },
    logoView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width / 2 - 60,
        marginTop: 5,
        width: 100,
        height: 100,
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    picker: {},
    pickerContainer: {
        overflow: 'hidden',
        position: 'absolute',
        alignItems: "center",
        flexDirection: 'column',
        backgroundColor: 'white',
        top: 10,
        width: width - 40,
        height: height /2,
        borderRadius: 5,
        // overflow: false,
        ...Platform.select({
            ios: {
                shadowColor: 'white',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 2,
            },
        }),
    },
    map: {
        width: width - 40,
        height: width - 40,
        resizeMode: 'cover',
        borderRadius: 5
    },
    headerTitile: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 5,
        color: '#000000'
    },
    shadowBoxText: {
        alignItems: "center",
        textAlign:'center',
        width: width -50,
        marginHorizontal: 25,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize:20,
        // borderRadius: 15,
                shadowColor: 'red',
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'red',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    shadowBoxBtn: {
        position: 'absolute',
        alignItems: "center",
        top: width ,
        width: width - 100,
        // marginHorizontal: 10,
        // marginVertical: 5,
        marginBottom: 10,
        // marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 15,
        backgroundColor: '#fff',
        borderColor:'black',
        fontSize:10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    },
    shadowBoxNextBtn: {
        width: width - 40,
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 20,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(61,39,255,0.2)',
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 5,
                shadowOpacity: 0.8
            },
            android: {
                elevation: 8,
            },
        }),
    }
});

export default styles;
