import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, TextInput, Switch, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, AsyncStorage } from "react-native";
// import { NavigationScreenProps } from "react-navigation";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import styles from "./Style";
import _ from "lodash";
import axios from "axios";


// import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');
const vi = require("../../../assest/Video/video-7.mp4")


export class Introduction extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            picture: "",
            userEmail: "",
            userName: "",
            id: "",
            userPrivilege: "Privilege Membership",

        };

    }

    render() {
        return (
            <Container >
                {/* <Text style={styles.Warning}>WARNING</Text> */}
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.15752-9/86624128_693242244837132_8882785743076851712_n.png?_nc_cat=109&_nc_ohc=0gt0WGWCEJ0AX_RlFEw&_nc_ht=scontent.fkhi8-1.fna&oh=0aa4a5891e440f35ec76f27550983281&oe=5EBE88C9" }}
                    />
                </View>
                <View style={styles.backgroundVideoView} >
                <Image
                        style={styles.backgroundVideo}
                        source={{ uri: "https://i.ytimg.com/vi/zjnNOCNpNu4/maxresdefault.jpg" }}
                    />
                </View>
                <View>
                    <Switch style={styles.switchButton} value={true}></Switch>
                </View>

                <View>



                    <Text style={styles.label}>{'UserName'}</Text>
                    <TextInput style={styles.text}
                        placeholder={'Add Mobile Number'}
                        placeholderTextColor={'#000'}
                        onChangeText={(text) => { this.state.username = text }}

                    >{""}</TextInput>

                    <Text style={styles.label}>{'Password'}</Text>
                    <TextInput
                        style={styles.text}
                        placeholder={'Enter Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'#000'}
                        onChangeText={(text) => { this.state.password = text }}
                    ></TextInput>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.phoneContainer}>
                        <Text style={styles.phoneStyle}>{'Login'}</Text>
                        <View style={styles.layer9} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.phoneContainer}>
                        <Text style={styles.phoneStyle}>{'Register Here'}</Text>
                        <View style={styles.layer9} />
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

