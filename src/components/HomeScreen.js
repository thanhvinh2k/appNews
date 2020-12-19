import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StatusBar} from 'react-native';
import {NEW_DETAILS_SCREEN} from '../commons/ScreenName';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Sports: [], isLoading: true
    };
}
componentDidMount() {
    const url = 'https://gist.githubusercontent.com/thanhvinh2k/08952acd0cb1f2df0197f3afc4d03c77/raw/4aae5de5f34589117de0e3c799cdd143ce504711/news.json'
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
              Sports: responseJson.sport_news, isLoading: false,
            })
        })
        .catch((error) => {
            console.error(error);

        })
}

render() {
    if (this.state.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }
    return (
        <View>
        <StatusBar backgroundColor="#66FFFF" barStyle="light-content" />
            <FlatList
                data={this.state.Sports}
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress = {() => {
                        this.props.navigation.navigate(NEW_DETAILS_SCREEN,item)
                    }} >
                        <BookItem items={item} index = {index} />
                    </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
}

export class BookItem extends React.Component {
state = {}
render() {
    return (
        <View style={{ flex: 1, flexDirection: 'row', padding: 5, marginVertical: 10,
            backgroundColor:this.props.index % 2 == 0 ? '#dcdcdc' : '#ffffff'
         }} >
            <Image style={{ width: 80, height: 80 }}
                source={{ uri: this.props.items.image }}
            />
            <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }} >
                <Text style={{fontSize: 18, color:'green', marginBottom: 15}} >
                    {this.props.items.sport_title}
                </Text>
                <Text style={{fontSize: 16, color: 'red'}} >
                    {this.props.items.author}
                </Text>
            </View>

        </View>
    );
}
  }