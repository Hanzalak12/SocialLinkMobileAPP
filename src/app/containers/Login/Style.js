import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const { width, height } = Dimensions.get('window');

const color = {
    periwinkleBlue: '#9e95fe',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#ffffff'
    },
    Warning: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width / 2 - 100,
        paddingTop: 10,
        fontSize: 50,
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
    backgroundVideoView: {
        marginTop: 5,
        marginLeft: 20,
        width: width-50,
        height: 200,
        backgroundColor: 'red',
        paddingLeft:50,
    },
    backgroundVideo: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        marginLeft: 20,
        width: width-50,
        height: 200,
      },
    switchButton: {
        fontSize: 25,
        color:'red',
        marginRight:30
    },
    inputIcon: {
        fontSize: 25,
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    layer9: {
        width: 62,
        height: 1.3,
        opacity: 0.5,
        backgroundColor: "#1a1a1a"
    },
    phoneContainer: {
        alignItems: 'center',
        flex: 1,
        marginBottom:15,
        marginTop:20
    },
    phoneStyle: {
        color: 'red',
        opacity: 0.44,
        padding:10
    },
    text: {
        color: '#000000',
        borderBottomColor: '#b0b0b0',
        borderTopColor: '#ffffff',
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderWidth: 2,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    label: {
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    header: {
        flexDirection: 'row',
        width: width,
        padding: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: 'white',
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
    posImgContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
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
    },
    posImg: {
        tintColor: 'rgb(26, 26, 26)',
        width: 20,
        height: 20,
        resizeMode: 'cover'
    },
    iconImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    iconContainer: {
        marginLeft: 20,
        marginRight: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: false,
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
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    smallText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12
    },
    descRow: {
        alignItems: 'center',
        flexDirection: 'row',
        width: width,
        padding: 10
    },
    smallIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 10,
        tintColor: 'black'
    },
    shadowBox: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
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
    },
    itemSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descGroup: {
        flexDirection: 'column',
        paddingLeft: 10,
        width: width / 2
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    desc: {
        fontSize: 15
    },
    photoContainer: {
        marginBottom: -5,
        width: width / 7,
        height: width / 7,
        borderRadius: width / 14,
        backgroundColor: 'white',
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
    photo: {
        zIndex: 100000,
        width: width / 7,
        height: width / 7,
        borderRadius: width / 14,
        borderColor: 'white',
        resizeMode: 'cover',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: '#dadada'
    }
});

export default styles;
