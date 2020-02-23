import React, { Component } from "react";
import { Text, TextInput, View, TouchableOpacity,ScrollView, Dimensions, Image } from "react-native";

import PaymentStyle from './paymentStyle';



export class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFeet: 4,
            selectedInch: 5,
            selectedItem: 0,
            selectedDay: 5,
            selectedMonth: 3,
            selectedYear: 2020,
            FoodList: ['Soul Food', 'Tex-Mex', 'Vegan', 'BBQ', 'Chinese', 'American', 'Pizza','Fast Food'],
            Day: ['1', '2', '3', '4', '5', '6', '7','8'],
            Month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Oct', 'No','Dec'],
            Year: ['1999', '2000', '2001', '2002', '2003', '2004', '2005','2006', '2007', '2008', '2009','2010'],
         };
    }
    onChange(name, val) {
      this.setState({[name]: val});
    }
    onPickerSelectDay(index) {
        this.setState({ selectedDay: index });
    }
    onPickerSelectMonth(index) {
        this.setState({ selectedMonth: index });
    }
    onPickerSelectYear(index) {
        this.setState({ selectedYear: index });
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
            <View style={PaymentStyle.Container}>
            <ScrollView>
            <View style={PaymentStyle.logoView}>
                    <Image
                        style={PaymentStyle.logo}
                        source={{ uri: "https://scontent.fkhi8-1.fna.fbcdn.net/v/t1.15752-9/86624128_693242244837132_8882785743076851712_n.png?_nc_cat=109&_nc_ohc=0gt0WGWCEJ0AX_RlFEw&_nc_ht=scontent.fkhi8-1.fna&oh=0aa4a5891e440f35ec76f27550983281&oe=5EBE88C9" }}
                    />
                </View>
              <View>
                <View style={PaymentStyle.label}>
                  <Text>VIP Payment page</Text>
                </View>
                <View style={PaymentStyle.InputView}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={PaymentStyle.TextInputStyle}
                    placeholder="name"
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, 'name')}
                  />
                </View>
                <View style={PaymentStyle.InputView}>
                  <TextInput
                    underlineColorAndroid="transparent"
                    style={PaymentStyle.TextInputStyle}
                    placeholder="payment card"
                    placeholderTextColor="#b2b2b2"
                    onChangeText={this.onChange.bind(this, 'paymentcard')}
                  />
                </View>
                <View style={PaymentStyle.centerView}>
                  <View style={PaymentStyle.InputViewSmall}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={PaymentStyle.TextInputStyle}
                      placeholder="Month"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'month')}
                    />
                  </View>
                  <View style={PaymentStyle.InputViewSmall}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={PaymentStyle.TextInputStyle}
                      placeholder="CVC"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'cvc')}
                    />
                  </View>
                  <View style={PaymentStyle.InputViewSmall}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={PaymentStyle.TextInputStyle}
                      placeholder="Zip Code"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'zipcode')}
                    />
                  </View>
                </View>
                {/* image */}
                <View style={PaymentStyle.centerImage}>
                  <View style={PaymentStyle.viewBoxTop}>
                    <Image
                      style={PaymentStyle.Logoimage}
                      source={{ uri: "https://www.nicepng.com/png/detail/207-2076847_paypal-acceptance-mark-major-credit-card-logos-png.png" }}
                    />
                  </View>
                  {/* <View style={PaymentStyle.viewBoxTop}>
                    <Image
                      style={PaymentStyle.Logoimage}
                      source={{uri:'https://buysocialpack.com/wp-content/uploads/2018/10/kisspng-paypal-logo-brand-font-payment-paypal-logo-icon-paypal-icon-logo-png-and-vecto-5b7f273deebfa6.7493516515350597739779.jpg'}}
                    />
                  </View> */}
                </View>
                <View>
                  <View style={PaymentStyle.InputViewNor}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={PaymentStyle.TextInputStyle}
                      placeholder="Referral code"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'rcode')}
                    />
                  </View>
                  <View style={PaymentStyle.InputView}>
                    <TextInput
                      underlineColorAndroid="transparent"
                      style={PaymentStyle.TextInputStyle}
                      placeholder="Email"
                      placeholderTextColor="#b2b2b2"
                      onChangeText={this.onChange.bind(this, 'email')}
                    />
                  </View>
                </View>
    
                <View
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    flexDirection: 'row-reverse',
                  }}>
                  <Text style={{fontWeight: 'bold', fontSize: 22}}>
                    Total : $0.00
                  </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>After 3-Day Free Trial,you will be charged</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 22}}>$9.99/Week</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    paddingBottom: 20,
                    paddingHorizontal: 10,
                  }}>
                  <Text>Next</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        );
    }
}

