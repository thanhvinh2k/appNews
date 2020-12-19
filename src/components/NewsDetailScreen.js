import React from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import {HOME_SCREEN} from '../commons/ScreenName';

export class NewsDetailScreen extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
      let tintuc = this.props.navigation.state.params;
      return (
        <WebView
        source={{uri: tintuc.link}}
        style={{marginTop: 20}}
      />
      );
    }
  }