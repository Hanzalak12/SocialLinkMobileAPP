import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity, Dimensions, Image } from "react-native";
import styles from "./Style";

const Picker = require('react-native-wheel-picker');
const { width,height } = Dimensions.get('window');
const PickerItem = Picker.Item;



export class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFeet: 4,
            selectedInch: 5,
            selectedItem: 0,
            FoodList: ['Soul Food', 'Tex-Mex', 'Vegan', 'BBQ', 'Chinese', 'American', 'Pizza','Fast Food'],
         };
    }
    onPickerSelectFeet(index) {
        this.setState({ selectedFeet: index });
    }
    onPickerSelectInch(index) {
        this.setState({ selectedInch: index });
    }

    // TODO: Find the use of those functions
    onAddFeet = () => {
        var name = '1'
        if (this.state.FoodList.indexOf(name) == -1) {
            this.state.FoodList.push(name)
        }
        this.setState({
            selectedItem: this.state.FoodList.indexOf(name),
        })
    }
    onAddInch = () => {
        var name = '1'
        if (this.state.inchList.indexOf(name) == -1) {
            this.state.inchList.push(name)
        }
        this.setState({
            selectedItem: this.state.inchList.indexOf(name),
        })
    }
    render() {
        return (
            <View>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.15752-9/86624128_693242244837132_8882785743076851712_n.png?_nc_cat=109&_nc_ohc=0gt0WGWCEJ0AX_RlFEw&_nc_ht=scontent.fkhi8-1.fna&oh=0aa4a5891e440f35ec76f27550983281&oe=5EBE88C9" }}
                    />
                </View>
                
                <Text  style={[ styles.shadowBoxText]}>Favorite Food</Text>
                <View style={styles.container}>
                    <View style={styles.pickerContainer}>
                        <Text style={{
                            width: '100%', textAlign: 'center', color: '#fff',
                            backgroundColor: 'black',
                            // padding: 10,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5,
                            fontWeight: 'bold',
                            fontSize: 15
                        }}>  HEIGHT {this.state.FoodList[this.state.selectedFeet]} </Text>
                        <View style={{ flexDirection: 'row', backgroundColor: 'red', width: width - 40, height: width - 40 - 50 }}>
                            <Picker style={{ width: (width - 40), height:height/3 }}
                                selectedValue={this.state.feetList}
                                itemStyle={{ color: "black", fontSize: 25 }}
                                onValueChange={(index) => { this.onPickerSelectFeet(index); }}>
                                {this.state.FoodList.map((value, i) => (
                                    <PickerItem label={value} value={i} key={"money" + value} />
                                ))}
                            </Picker>
                        </View>
                        {/* <View style={{ height: 100, width: width, backgroundColor: 'rgba(61,39,255,0.2)' }}></View> */}
                    </View>
                <TouchableOpacity activeOpacity={0.8}
                                onPress={() => {  }}
                                style={[{ marginTop: -40 }, styles.shadowBoxBtn]}>
                                {/* <Image source={send} style={styles.iconImg} /> */}
                                <Text style={{fontSize:20}}
                                >Next --></Text>
                            </TouchableOpacity>
                </View>

                
            </View>
        );
    }
}

