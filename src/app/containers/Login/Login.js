import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, TextInput, Switch, TouchableOpacity, View, StatusBar, ScrollView, CheckBox, AsyncStorage } from "react-native";
// import { NavigationScreenProps } from "react-navigation";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import styles from "./Style";
import _ from "lodash";
import axios from "axios";
import DatePicker from "react-native-datepicker"

// import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');
const vi = require("../../../assest/Video/video-7.mp4")


// const gear = require('../../../assest/Images/gear.png');
// const pencil = require('../../../assets/Images/pencil.png');
// const option = require('../../../assets/Images/option.png');

export class Login extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            picture: "data:image/png;base64,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",
            userEmail: "",
            userName: "",
            id: "",
            userPrivilege: "Privilege Membership",

        };

    }

    render() {
        return (
            <Container >
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
                        style={{ width: 200,marginTop:20 }}
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

                <TouchableOpacity activeOpacity={0.8}
                                onPress={() => {  }}
                                style={[{ marginTop: -40 }, styles.shadowBoxBtn]}>
                                {/* <Image source={send} style={styles.iconImg} /> */}
                                <Text style={{fontSize:20}}
                                >Next --></Text>
                            </TouchableOpacity>

            </Container>
        );
    }
}

