import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Button,
    AsyncStorage,
    Platform,
    
} from "react-native";
import { Header, Body,Container } from 'native-base';

class HomeScreen extends Component {
    signOut = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('AuthLoading')
    }
    render() {
        return (
            <Container>
            <Header style={{ backgroundColor: '#d91009' }}>

                <Body>
                    <Text style={{ alignSelf: Platform.OS == 'android' ? 'center' : null,fontSize:17,color:'#fff' }}>Home</Text>
                </Body>

                </Header>
                <Button title="Sign Out" onPress={this.signOut} />
                </Container>
               
               
               
                 
               
               
            
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});