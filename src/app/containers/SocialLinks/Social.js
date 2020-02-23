import React, { Component } from "react";
import { StyleSheet, Dimensions, Image, ImageBackground, TextInput, Switch, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, AsyncStorage } from "react-native";
// import { NavigationScreenProps } from "react-navigation";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import styles from "./Style";
import _ from "lodash";
// import axios from "axios";
import DatePicker from "react-native-datepicker"

// import ImagePicker from 'react-native-image-picker';
// import Video from 'react-native-video';

const { width,height } = Dimensions.get('window');
// const vi = require("../../../assest/Video/video-7.mp4")


// const gear = require('../../../assest/Images/gear.png');
// const pencil = require('../../../assets/Images/pencil.png');
// const option = require('../../../assets/Images/option.png');

export class Social extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            picture: "https://lh3.googleusercontent.com/proxy/lmXInupm3Is_QKj5QOVPH523u8Gi1zdwG7V9EdVBT5qI29oepFssIwb0QKGbZTCufqrwBuILn6xYXaueb7HJwTnoqBSHS-H8-kP6G869YqE",
            userEmail: "",
            userName: "",
            id: "",
            userPrivilege: "Privilege Membership",
            Link:[1,2,3,4,5,6,7,8,10,11,12,12,12,1,1,1,1,11,1],
            Profilepicture: "https://lh3.googleusercontent.com/proxy/OJpd_G1EA21A9Vj9NvrWFpGSZm-EzxXRR_0YvtSGQpQKBJeSN6S4qJFZVNaZUYK218NSikXMPQNTFI762uXqrA43hTgVLLp7KxtrLq9T98p6HHKCF9A",
            
        };

    }

    render() {
        return (
            <ScrollView>
                
            <View style={[styles.container]}>
            <View style={{ marginTop:10,flexDirection: 'row-reverse',width: width,paddingHorizontal: 35,  }}>
                    <View style={[ { width: width / 8, height: width / 8, padding: 0, borderRadius: width / 6, justifyContent: 'center', alignItems: 'center' }]}>
                        <Image source={{ uri: this.state.Profilepicture }}
                            style={{ width: width / 8, height: width / 8, borderRadius: width / 6, resizeMode: 'cover' }} />
                    </View>
                    <View style={[ { width: width / 2, height: width / 8, borderRadius: width / 6,paddingRight:50, justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={{justifyContent: 'center', alignItems: 'center',fontSize:30}}>FOOD</Text>
                    </View>
                    <View style={[ { paddingHorizontal: width / 4,width: width / 8, height: width / 8, padding: 0, borderRadius: width / 6 }]}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5vReVaVP2Q38adIlFzPGd0LAwye5dwNDRYaqbyh2tG_U16cSF' }}
                            style={{ width: width / 8, height: width / 8, borderRadius: width / 6, resizeMode: 'cover' }} />
                    </View>
                </View>
            {/* <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.15752-9/86624128_693242244837132_8882785743076851712_n.png?_nc_cat=109&_nc_ohc=0gt0WGWCEJ0AX_RlFEw&_nc_ht=scontent.fkhi8-1.fna&oh=0aa4a5891e440f35ec76f27550983281&oe=5EBE88C9" }}
                    />
                </View> */}
              {_.map(this.state.Link, (item, index) => {
                        return (
                <View style={[styles.shadowBoxBtn,{ justifyContent: 'center', alignItems: 'center',marginTop:20 ,width: width / 4+22,height: width / 4,marginLeft:5,marginVertical:20}]}>
                        <Image source={{ uri: this.state.picture }}
                            style={{ width: width / 4+22, height: width / 4, resizeMode: 'cover' }} />
                </View>
                        )}
              )}
            </View>
<View style={[{ marginTop: -4 }, styles.shadowBoxBtn]}></View>
            </ScrollView>
        );
    }
}

