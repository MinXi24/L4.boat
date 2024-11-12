import React from 'react';
import {View, Text, Image, ScrollView,StatusBar, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    Header: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'skyblue',
        backgroundColor: 'black',
        color: 'white',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center'
    },
    Box: {
        borderWidth: 3,
        borderColor: 'skyblue',
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    img: {
        width: 370,
        height: 300,
        borderWidth: 2,
        borderColor: 'black',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    text: {
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'lightgrey',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    texthead: {
        color: 'black',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        textAlign: 'center',
    }
});
const Boat = ({name,description,icon,poster})=> {
    return (
        <View style = {styles.Box}>
            <Text style = {styles.texthead}>
                <Icon name="sailboat" size={20} color="#98F5F9"><Text>{name}</Text></Icon>

            </Text>
            <Text style = {styles.text}>
                {description}
            </Text>
            <Image source={poster} style = {styles.img} />
        </View>
    );
};const AllBoats = () => {
    return (
        <ScrollView>
            <StatusBar hidden={true}/>
            <Text>

            </Text>
            <Text style = {styles.Header}>GetABoat - For Sale</Text>

            <Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." poster={require('../img/sea_ray.jpg')}/>
            <Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." poster={require('../img/four_winns.jpg')}/>
            <Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." poster={require('../img/flipper.jpg')}/>
            <Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." poster={require('../img/princess.jpg')}/>
            <Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." poster={require('../img/bayliner.jpg')}/>
            <Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." poster={require('../img/fairline.jpg')}/>
        </ScrollView>
    );
};
export default AllBoats;


