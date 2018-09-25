import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Constants, Video, ScreenOrientation  } from 'expo';
import VideoPlayer from '@expo/videoplayer';


class IntroVideo extends Component {
     
    render() {
        return (
            <View style={styles.container}>
            <VideoPlayer
            videoProps={{  shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
              isMuted: false}}
            isPortrait={true}
        
            playFromPositionMillis={1}
            switchToLandscape={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)}
           
            switchToPortrait={()=>ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)}
            />
                
          
            </View>
        );
    }
}
export default IntroVideo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    }
});