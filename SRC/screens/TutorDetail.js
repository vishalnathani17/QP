import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    Platform,
    TouchableOpacity
} from "react-native";
import {
    Container, Button, Header, Card, CardItem, Content, List, ListItem, Left,
    Body, Right, Thumbnail, Text, Accordion
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const dataArray = [
    { title: "Qualifications", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet" },
    { title: "Expertise", content: "Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet" },
    { title: "Courses", content: "Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet" }
];
class TutorDetail extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        tutor_id: null,
        tutors: [],
    }
    componentWillMount = async () => {
        const { navigation } = this.props;
        const tutor_id = navigation.getParam('tutor_id');
        await this.setState({
            tutor_id
        })
        try {
            let { data } = await axios.post('https://chat.qualpros.com/api/get_one_tutor', {
                tutor_id: this.state.tutor_id,
            })
                .then((response) => {
                 
                    if (response.data.data.status === 'success') {
                        this.setState({ tutors: response.data.data.tutor_detail_array })

                       
                    } else {
                        console.log(response.data.data);


                     

                    }
                })
        }
        catch (err) {
            console.log(err)

        }
        
    }

    onDayPress(day) {
        this.setState({
            selected: day.dateString
        });
    }


    

    render() {

        return (

            <Container>
                <Header style={{ backgroundColor: '#d91009' }}>

                    <Left style={styles.left}>
                        <TouchableOpacity
                            style={styles.backArrow}
                            onPress={() => this.props.navigation.navigate("SearchScreen")}
                        >
                            <FontAwesome
                                name="angle-left"
                                size={30}
                                color='#fff'
                            />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text style={{ alignSelf: Platform.OS == 'android' ? 'center' : null, fontSize: 17, color: '#fff' }}>Book A Private Tuition</Text>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={styles.container}>
                    {
                        this.state.tutors.map((tutor) => {
                            return (
                                <Card key="1">
                                    <CardItem>
                                        <Left>
                                            <Thumbnail source={{ uri: tutor.profile_image }} />
                                            <Body>
                                                <Text style={{width:220}}>{tutor.first_name} {tutor.last_name}</Text>
                                                <Text note style={{width:220}}>{tutor.tutor_experties_category}</Text>

                                            </Body>
                                        </Left>
                                        <Right>

                                        </Right>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Text style={{ padding: 10 }}>{tutor.tutor_experties}</Text>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Text>Private Tuition £{tutor.price_per_h}</Text>
                                        </Left>
                                        <Right>
                                            <Button style={{ padding: 10, backgroundColor: '#d91009' }} onPress={() => { this.props.navigation.navigate('Animate') }}>
                                                <Text>Book Now</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                    <Accordion
                        headerStyle={{ backgroundColor: '#fff', borderBottomColor: '#d91009', borderBottomWidth: 1 }}
                        contentStyle={{ backgroundColor: '#fff' }}
                        dataArray={dataArray} iconStyle={{ color: '#d91009' }} />

                    <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>


                    {/* <Calendar
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
          // disabledByDefault={true}
          hideArrows={true} */}
                    />
            </ScrollView>
            </Container>
        );
    }
}
export default TutorDetail;

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

});