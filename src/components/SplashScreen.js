import React from 'react';
import { View, Text, Button, Image,ActivityIndicator } from 'react-native';
import { HOME_SCREEN, LOGIN_SCREEN } from '../commons/ScreenName';

export class SplashScreen extends React.Component {
    constructor(props) {
        super(props);

        var toLogin = () => {
            this.props.navigation.navigate(LOGIN_SCREEN)
        }
        setTimeout(toLogin, 2000);
    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
                <Image source={require('../Images/logo.png')} />
                <Text style={{fontSize: 25, color: 'red'}} >Name: Nguyễn Thành Vinh</Text>
                <Text style={{fontSize: 25, color: 'red', fontStyle: 'italic'}}>MSSV: PD03050</Text>
                {/* <Button style = { {} } 
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate(LOGIN_SCREEN)}
                /> */}
                 <ActivityIndicator size="large" color="#0000ff"  />
            </View>
        );
    }
}
