import React, { Component } from "react";
import {
    StyleSheet,
    AsyncStorage,
    Platform
} from "react-native";
import { Container,Card, CardItem, Thumbnail, Button, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

class ProfileScreen extends Component {
    state = {
        user: [],
       
    }
    componentWillMount = async () => {
        const username = await AsyncStorage.getItem('username');
        const userid = await AsyncStorage.getItem('user_id');
         
            try {
              let { data } = await axios.post('https://chat.qualpros.com/api/login', {
            
                email: 'mailmeonparsana@gmail.com',
                password: 'Swatinfo%7854@',
              })
                .then((response) => {
                  
                  if (response.data.data.status === 'success') {
                      
                    this.setState({ user: response.data.data.user_info })
                   
                  } else {
                    console.log(response.data.data);
                   
                    alert(response.data.data.message)
        
        
                  }
                })
            } catch (err) {
              console.log(err);
            }
            
          
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#d91009'}}>
                
                <Body>
                    <Text style={{ alignSelf: Platform.OS == 'android' ? 'center' : null,fontSize:17,color:'#fff' }}>Profile</Text>
                </Body>
            </Header>
                <Content>
                <Card>
                    <CardItem>
                        <Left>
                            
                            <Body>
                                <Text>{this.state.user.username}</Text>
                                <Text note>View and edit profile</Text>
                            </Body>
                        </Left>
                        <Right>
                        <Thumbnail source={{uri : this.state.user.profile_picture}} />
                        </Right>
                    </CardItem>
                    </Card>
                    <ListItem icon onPress={()=>{this.props.navigation.navigate('CalenderView')}}>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Icon1 active name="calendar" size={24} color='#A9A9A9' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Calendar View</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Icon1 active name="shopping-cart" size={24} color='#A9A9A9' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>My Booking and Payments</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>    
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Icon2 active name="md-settings" size={24} color='#A9A9A9' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Setting</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Icon2 active name="md-help" size={24} color='#A9A9A9' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Get Help</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#fff" }}>
                                <Icon2 active name="md-mail" size={24} color='#A9A9A9' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Give us feedback</Text>
                        </Body>
                        <Right>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                  
                </Content>
            </Container>
            
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});