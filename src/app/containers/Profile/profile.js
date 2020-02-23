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
                <View style={{ flexDirection: 'row', width: width, padding: 20, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={{ uri: "../../../assest/Images/gear.png" }} style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Image source={{ uri: "../../../assest/Images/gear.png" }} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>Add a Photo</Text>
                    <View style={[styles.shadowBox, { width: width / 3, height: width / 3, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}>
                        <Image source={{ uri: this.state.picture }}
                            style={{ width: width / 3, height: width / 3, borderRadius: width / 6, resizeMode: 'cover' }} />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => { this.selectPhotoTapped(); }}
                        style={[styles.shadowBox,
                        { width: 40, height: 40, padding: 0, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: -25 }]}>
                        <Image source={{ uri: "data:image/png;base64,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" }} style={{ width: 40, height: 40, borderRadius: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[styles.shadowBox, { width: width / 3, height: width / 3, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}>
                        <Image source={{ uri: 'https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.15752-9/86624128_693242244837132_8882785743076851712_n.png?_nc_cat=109&_nc_ohc=0gt0WGWCEJ0AX_RlFEw&_nc_ht=scontent.fkhi8-1.fna&oh=0aa4a5891e440f35ec76f27550983281&oe=5EBE88C9' }}
                            style={{ width: width / 3, height: width / 3, borderRadius: width / 6, resizeMode: 'cover' }} />
                    </View>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20 }}>
                    <Text>When will you be in Dollas?</Text>
                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2050-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />
                </View>


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
