import React, { Component } from "react";
import { 
    View,
    TouchableOpacity,Platform,
    StyleSheet
} from "react-native";
import { Container, Button, Header,  CardItem, Left, 
    Body, Right, Text,  } from 'native-base';
import {Calendar} from 'react-native-calendars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fonts from '../Theme/assets/Fonts';


class CalenderView extends Component {

    static navigationOptions = {
        header : null
    }  
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#d91009'}}>
                   
                   <Left style={styles.left}>
             <TouchableOpacity
               style={styles.backArrow}
               onPress={() => this.props.navigation.navigate("ProfileScreen")}
             >
               <FontAwesome
                 name="angle-left"
                 size={30}
                 color='#fff'
               />
             </TouchableOpacity>
                   </Left>
                   <Body>
                       <Text style={{alignSelf: Platform.OS=='android' ? 'center' : 'center'}}>Calendar View</Text>
                   </Body>
                   <Right />
               </Header>
               <Text style={styles.text1}>Upcoming Bookings</Text>
              
               <CardItem>
               <Left>
                                <Text style={{fontSize: Fonts.moderateScale(15),fontWeight:'bold'}}>Krutika Adatiya</Text>
                            </Left>
                            <Right>
                                <Button style={{ padding: 10, backgroundColor: 'green',borderRadius:40,height:25 }}>
                                    <Text style={{fontSize: Fonts.moderateScale(10),fontWeight:'bold'}}>Acepted</Text>
                                </Button>
                            </Right>
                        </CardItem>
               <CardItem>
               <Left>
               <Button style={{ padding: 10, backgroundColor: '#d91009',borderRadius:40,height:25 }}>
                                    <Text style={{fontSize: Fonts.moderateScale(10),fontWeight:'bold'}}>ACCA</Text>
                                </Button>

                               
                            </Left>
                            <Right>
                            <Text style={{fontSize: Fonts.moderateScale(15),fontWeight:'bold'}}>8 Oct 2018</Text>
                            </Right>
                        </CardItem>
                        <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/> <CardItem>
               <Left>
                                <Text style={{fontSize: Fonts.moderateScale(15),fontWeight:'bold'}}>Krutika Adatiya</Text>
                            </Left>
                            <Right>
                                <Button style={{ padding: 10, backgroundColor: 'green',borderRadius:40,height:25 }}>
                                    <Text style={{fontSize: Fonts.moderateScale(10),fontWeight:'bold'}}>Acepted</Text>
                                </Button>
                            </Right>
                        </CardItem>
               <CardItem>
               <Left>
               <Button style={{ padding: 10, backgroundColor: '#d91009',borderRadius:40,height:25 }}>
                                    <Text style={{fontSize: Fonts.moderateScale(10),fontWeight:'bold'}}>ACCA</Text>
                                </Button>

                               
                            </Left>
                            <Right>
                            <Text style={{fontSize: Fonts.moderateScale(15),fontWeight:'bold'}}>8 Oct 2018</Text>
                            </Right>
                        </CardItem>
                        <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
            <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
        <Calendar
          style={styles.calendar}
          current={'2012-05-16'}
          minDate={'2012-05-10'}
          maxDate={'2012-05-29'}
          firstDay={1}
          markedDates={{
            '2012-05-23': {selected: true, marked: true},
            '2012-05-24': {selected: true, marked: true, dotColor: 'green'},
            '2012-05-25': {marked: true, dotColor: 'red'},
            '2012-05-26': {marked: true},
            '2012-05-27': {disabled: true, activeOpacity: 0}
          }}
         
          hideArrows={true}
        />
        </Container>
        );
    }
}
export default CalenderView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        borderColor: '#bbb',
        padding: 10,
        backgroundColor: '#eee'
        },
        text1: {
            textAlign: 'center',
            borderColor: '#bbb',
            padding: 10,
            backgroundColor: '#FFF',
        
            },
            lable: {
            padding: 10,
            backgroundColor: 'green',
            borderRadius:10,
            
           
            },
            lableText:{
                color:'#fff',
                
                
            }

});