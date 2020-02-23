import React, { Component } from "react";
import { StyleSheet, Dimensions, Image, ImageBackground, TextInput, Switch, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, AsyncStorage } from "react-native";
// import { NavigationScreenProps } from "react-navigation";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
// import styles from "./Style";
// import _ from "lodash";
// import axios from "axios";
import DatePicker from "react-native-datepicker"

// import ImagePicker from 'react-native-image-picker';
// import Video from 'react-native-video';

const { width,height } = Dimensions.get('window');
// const vi = require("../../../assest/Video/video-7.mp4")


// const gear = require('../../../assest/Images/gear.png');
// const pencil = require('../../../assets/Images/pencil.png');
// const option = require('../../../assets/Images/option.png');

export class MyProfile extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            picture: "https://lh3.googleusercontent.com/proxy/OJpd_G1EA21A9Vj9NvrWFpGSZm-EzxXRR_0YvtSGQpQKBJeSN6S4qJFZVNaZUYK218NSikXMPQNTFI762uXqrA43hTgVLLp7KxtrLq9T98p6HHKCF9A",
            userEmail: "",
            userName: "",
            id: "",
            userPrivilege: "Privilege Membership",

        };

    }

    render() {
        return (
            <View >
                {/* <View style={{ flexDirection: 'row', width: width, padding: 20, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={{ uri: "../../../assest/Images/gear.png" }} style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={{ uri: "../../../assest/Images/gear.png" }} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View> */} 
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>MY PROFILE</Text>
                    <View style={[styles.shadowBox, { width: width / 3, height: width / 3, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}>
                        <Image source={{ uri: this.state.picture }}
                            style={{ width: width / 3, height: width / 3, borderRadius: width / 6, resizeMode: 'cover' }} />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Nshelton</Text>
                </View>

<View style={[{ marginTop: -4 }, styles.shadowBoxBtn]}></View>
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:width/10 }}>
                    {/* <View style={[ { width: width / 3, height: width / 3, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}> */}
                        <Image source={{ uri: 'https://mirroreffectmedia.co.za/wp-content/uploads/2016/08/banner-pic-1550x650.jpg' }}
                            style={{ width: width-50 , height: width / 2, resizeMode: 'cover',marginHorizontal:50 }} />
                    {/* </View> */}
                </View>


<View style={[{ marginTop: -4 }, styles.shadowBoxBtn]}></View>
               

            </View>
        );
    }
}


const styles = StyleSheet.create({
    header:{
        flexDirection: 'row', width: width, padding: 10, justifyContent: 'space-between',backgroundColor:'red',
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
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#ffffff'
    },
    itemRoot: {
        flexDirection: 'column', 
        alignItems: 'center', 
        width: width
    },shadowBoxBtn: {
        alignItems: "center",
        width: width - 100,
        marginHorizontal: 60,
        // marginVertical: 15,
        marginTop: 30,
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
    photoContainer: {

        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
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
        width: width / 4 * 3
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    desc: {
        fontSize: 15
    },
    photo: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
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
