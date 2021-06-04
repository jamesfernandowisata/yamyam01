import React from 'react';
import {View,StyleSheet,Text,Dimensions,Button} from 'react-native';


const {width, height} =Dimensions.get('window')
//const {navigate} = this.props.navigation;

const ProductCard = ({item})=>{
    return(
        <View style={styles.CardContainer}>    
            <Text style={styles.Title}>{item.name}</Text>
            <Text style={styles.Subtitle}>{item.title}</Text>
        </View>
    )


}

const style = StyleSheet.create({

    CardContainer:{
        backgroundColor: '#ffffff',
        margin:5,
        borderRadius: width *0.05,
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:2
    },

    Title:{
        width:width,
        marginHorizontal: width *0.05,
        marginVertical:width *0.03,
        color :'black',
        fontSize:20,
        fontWeight:'bold',
    },
    Subtitle:{
        marginHorizontal: width *0.05,
        fontSize:15,
        color:'gray'
    }



})

export default ProductCard;