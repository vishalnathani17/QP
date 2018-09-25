import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TextInput,
    Platform,
    TouchableOpacity
} from "react-native";
import {Button, Right, Left, Body, Card, CardItem, Thumbnail } from 'native-base';
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import axios from 'axios';
import Fonts from '../Theme/assets/Fonts';
import AwesomeAlert from 'react-native-awesome-alerts';

class SearchScreen extends Component {

    state = {
        tutors: [],
        student_id: '62',
        bookmark : 'bookmark-o',
        showAlert : false,
        message: ''
    }

    componentWillMount = () => {
        this.loading();
 }

    loading = async () => {
       
        try {
            let { data } = await axios.post('https://chat.qualpros.com/api/get_tutor_list', {
                tutor_id : '0',
                student_id: '62'
            })
                .then((response) => {
                   
                    if (response.data.data.status === 'success') {
                        this.setState({ tutors: response.data.data.tutor_list_array })
                       
                       
                    } else {
                        console.log(response.data.data);
                       
                       
                        


                    }
                })
        } 
        catch (err) {
            console.log(err)
            
        }
      
    }

    bookmark = async(tutor_id, student_id) => {
        try {
            let { data } = await axios.post('https://chat.qualpros.com/api/make_as_favourite_tutor',{
                tutor_id,
                student_id,
            })
                .then((response) => {
                    
                    if (response.data.data.status === 'success') {
                        
                        this.setState({
                            message: response.data.data.message,
                            showAlert: true,
                        })
                        this.loading();

                     
                    } else {
                        console.log(response.data.data);

                        alert(response.data.data.message)


                    }
                })
        } catch (err) {
            console.log(err)
        }
      
    }

    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
    
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };

    render() {

        return (

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: Platform.OS == 'android' ? 100 : 80, backgroundColor: 'white',
                        borderBottomColor: '#dddddd', borderBottomWidth: 1
                    }}>
                        <View style={{
                            flexDirection: 'row', padding: 10, backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : 10
                        }}>
                            <Icon1 name="ios-search" size={20}>  </Icon1>
                            <TextInput underlineColorAndroid="transparent"
                                placeholder="Search Tutor"
                                placeholderTextColor="black"
                            />
                        </View>

                    </View>
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


                </View>

                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={false}
                    title="QualPros!"
                    message={this.state.message}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonColor="#d91009"
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                    />                    


            </SafeAreaView>
        );
    }
}
export default SearchScreen;

const styles1 = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#d91009',

    }
});