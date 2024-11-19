//Exercise 3
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar, SectionList,Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const datasource = [
    {data:[
            {Name:'Bulbasaur', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_1-2x.png' },
            {Name:'Ivysaur', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_2-2x.png' },
            {Name:'Venusaur', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_3-2x.png' },
        ],
        title:"Grass/Bug", bgColor:"greenyellow", icon:"leaf"},
    {data:[
            {Name:'Charmander', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png' },
            {Name:'Charmeleon', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5-2x.png' },
            {Name:'Charizard', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png' },
            {Name:'Flareon', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_136-2x.png' },
            {Name:'Moltres', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_146-2x.png' },
        ],
        title:"Fire", bgColor:"darkorange" , icon:"fire"},
    {data:[
            {Name:'Squirtle', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png' },
            {Name:'Wartortle', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8-2x.png' },
            {Name:'Blastoise', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png' },
            {Name:'Vaporeon', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134-2x.png' },
            {Name:'Articuno', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_144-2x.png' },
        ],
        title:"Water/Ice", bgColor:"skyblue" , icon:"droplet"},
    {data:[
            {Name:'Pidgey', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_16-2x.png' },
            {Name:'Pidgeotto', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_17-2x.png' },
            {Name:'Pidgeot', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_18-2x.png' },
            {Name:'Eevee', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_133-2x.png' },
            {Name:'Snorlax', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_143-2x.png' },
        ],
        title:"Normal/Flying", bgColor:"white" , icon:"star-of-life"},
    {data:[
            {Name:'Ekans', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_23-2x.png' },
            {Name:'Arbok', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_24-2x.png' },
        ],
        title:"Dark/Poison", bgColor:"darkslategray" , icon:"moon"},
    {data:[
            {Name:'Pikachu', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png' },
            {Name:'Raichu', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png' },
            {Name:'Jolteon', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_135-2x.png' },
            {Name:'Zaptos', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_145-2x.png' },
        ],
        title:"Lightning", bgColor:"yellow" , icon:"bolt-lightning"},
    {data:[
            {Name:'Sandshrew', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_27-2x.png' },
            {Name:'Sandslash', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_28-2x.png' },
        ],
        title:"Fighting/Ground", bgColor:"peru" , icon:"hand-fist"},
    {data:[
            {Name:'Clefairy', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_35-2x.png' },
            {Name:'Clefable', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_36-2x.png' },
            {Name:'Mewtwo', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_150-2x.png' },
            {Name:'Mew', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png' },
        ],
        title:"Psychic/Fairy/Ghost", bgColor:"plum" , icon:"eye"},
    {data:[
            {Name:'Dratini', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_147-2x.png' },
            {Name:'Dragonair', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_148-2x.png' },
            {Name:'Dragonite', CardImage:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_149-2x.png' },
        ],
        title:"Dragon", bgColor:"darkkhaki" , icon:"dragon"},
];


const styles = StyleSheet.create({

    container: {
        backgroundColor:'lightcyan',
        borderWidth: 2,
        flex: 1,
        flexDirection: 'row',
    },
    textStyle:{
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        textAlignVertical:'center',
    },
    headerText:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imageStyle:{
        alignItems:'center',
        width:300,
        height:300,
        margin:20,
    }
})
const renderItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{item.Name}</Text>
            <Image source={{uri:item.CardImage}} style={styles.imageStyle} resizeMode="contain"/>
        </View>
    );
};

const MyApp = () =>{
    return (
        <View style={{marginTop: 30}}>
            <Button title="Add New Pokemon"/>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, bgColor, icon}})=>(
                             <Text style={[styles.headerText,styles.container, {backgroundColor: bgColor}]}>
                                 <Icon name={icon} size={20}/> {title}</Text>)}/>
        </View>
    )
}

export default MyApp;
