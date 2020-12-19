import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { HOME_SCREEN } from '../commons/ScreenName';
import { Avatar } from 'react-native-elements';


export class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

  }
  checkLogin = () => {
    if (this.state.username == "nguyenthanhvinh" && this.state.password == "vinh123456") {
      this.props.navigation.navigate(HOME_SCREEN)
    } else {
      Alert.alert("tên đăng nhập và mật khẩu không phù hợp!");
    }
  }


  render() {
    
    return (

      <View style={styleLogin.container}>
        <Image style={{ width: 271, height: 119 }}
          source={require('../Images/logo.png')}
        />
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri:
              'https://i.imgur.com/e2fZKIS.jpg',
          }}
        />
        <TextInput style={styleLogin.inputText}
          placeholder='Username'
          placeholderTextColor='#F27125'
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput style={styleLogin.inputText}
          placeholder='Password'
          placeholderTextColor='#F27125'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styleLogin.buttonSignUp}
          onPress={this.checkLogin}
        >
          <Text style={styleLogin.textInBT} >Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: "center"
  },

  textTitle: {
    color: '#111111',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 15
  },

  inputText: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#F27125',
    borderRadius: 25,
    color: '#F27125',
    fontSize: 18,
    marginVertical: 5,
    paddingLeft: 10
  },
  button: {
    backgroundColor: '#F27125',
    width: '44%',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#F27125',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonSignUp: {
    backgroundColor: '#F27125',
    width: '50%',
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#F27125',
    padding: 10
  },
  textInBT: {
    textAlign: "center",
    fontSize: 16,
    color: 'white',
    fontWeight: '500'
  },
  viewBt: {
    flexDirection: 'row',
  }
})

