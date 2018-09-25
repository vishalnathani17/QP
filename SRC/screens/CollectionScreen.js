import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity
} from "react-native";
import { Container, Button, Header, Card, CardItem, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Accordion } from 'native-base';
import Fonts from '../Theme/assets/Fonts';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];
import Icon2 from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';

class CollectionScreen extends Component {
    state = {
        tutors: [],
        student_id: '62',

    }
    componentDidMount() {
        this.props.navigation.addListener('willFocus', (playload) => {
            console.log(playload);
            this.loading();
        });
    }

    componentWillMount = () => {
        this.loading();
    }

    loading = async () => {


        try {
            let { data } = await axios.post('https://chat.qualpros.com/api/get_favourite_tutor_list', {
                student_id: '62',
            })
                .then((response) => {

                    if (response.data.data.status === 'success') {
                        this.setState({ tutors: response.data.data.tutor_list_array })
                        console.log(response.data.data.tutor_list_array);


                    } else {
                        console.log(response.data.data);




                    }
                })
        }
        catch (err) {
            console.log(err)

        }


    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#d91009' }}>

                    <Body>
                        <Text style={{ alignSelf: Platform.OS == 'android' ? 'center' : null, fontSize: 17, color: '#fff' }}>Book A Private Tuition</Text>
                    </Body>
                </Header>


                <ScrollView>
                   
                {
                            this.state.tutors.map((tutor) => {
                                return (
                                    <Card key={tutor.tutor_id} style={{borderColor:'#d91009'}}>
                                        

                                        <CardItem  style={{ borderBottomWidth: 1, borderColor: '#d91009' }}>
                                            <Left>
                                                <Thumbnail source={{uri : tutor.profile_image}} />
                                                <Body>
                                                    <Text style={{width:220}}>{tutor.first_name} {tutor.last_name}</Text>
                                                    <Button style={{ padding: 10, backgroundColor: '#d91009',borderRadius:40,height:25 }}>
                                    <Text style={{fontSize: Fonts.moderateScale(10),color:'#fff'}}>{tutor.tutor_experties_category}</Text>
                                </Button>
                                                
                                                </Body>
                                            </Left>
                                            <Right>
                                                <TouchableOpacity onPress={()=> this.bookmark(tutor.tutor_id, this.state.student_id)}>
                                                <Icon2 name={tutor.is_favourite_tutor == 1 ? 'bookmark' : 'bookmark-o'} size={24} color='#d91009' />
                                                </TouchableOpacity>
                                            </Right>
                                        </CardItem>
                                        <CardItem cardBody style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{ padding: 10 }}>{tutor.tutor_experties}</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <Text>Private Tuition £{tutor.price_per_h}</Text>
                                            </Left>
                                            <Right>
                                                <Button 
                                                    style={{ padding: 10, backgroundColor: '#d91009' }}
                                                    onPress={()=>this.props.navigation.navigate('TutorDetail', { 
                                                        tutor_id : tutor.tutor_id
                                                      })}>
                                                    <Text style={{color:'#fff'}}>Book Now</Text>
                                                </Button>
                                            </Right>
                                        </CardItem>

                                    </Card>
                                )
                            })
                        }
                        

                </ScrollView>
            </Container>
        );
    }
}
export default CollectionScreen;

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
    }
});