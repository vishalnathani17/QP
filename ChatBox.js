import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet, Image,
    TextInput,
    TouchableOpacity,
    FlatList
} from "react-native";
import { Container, Header, Left, Input } from "native-base"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import sampleurl from "./Sample";

class ChatBox extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super();


        this.state = {
            dataSource: [],
           
          }
        
    }

   
    componentDidMount(){
        const url = sampleurl
        fetch(url)
        .then((responce)=> responce.json())
        .then((responceJson)=>{
                this.setState = ({
                    dataSource:responceJson.friends 
                })
                
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#d91009' }}>

                    <Left style={styles.left}>
                        <TouchableOpacity
                            style={styles.backArrow}
                            onPress={() => this.props.navigation.navigate("ChatScreen")}
                        >
                            <FontAwesome
                                name="angle-left"
                                size={30}
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </Left>
                </Header>
                
                <FlatList

                    data={this.state.dataSource}
                    renderItem={({ item }) => (
                        <ListItem
                            align={item.algn}
                            title={item.msg}
                            from={item.name} />
                            )}
                />

            </Container>
        );
    }
}
export default ChatBox;

const styles = StyleSheet.create({
    calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
    },
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    acordian_style: {

        backgroundColor: '#fff'
    }
});