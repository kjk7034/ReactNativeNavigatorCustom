'use strict';
import React, {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

var StateBarHeight;
if(Platform.OS == "ios") {
    StateBarHeight = 20
} else {
    StateBarHeight = 0
}

export const Style = StyleSheet.create({
    Wrapper: {
        flex:1,
        marginTop:StateBarHeight
    },
    Header: {
        height: 50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#000"
    },
    Title: {
        color:"#fff",
        fontSize : 20
    },
    PrevBtnWrap : {
        position:"absolute",
        left:10,
        top:10,
    },
    PrevBtn : {
        height:30,
        borderWidth:1,
        borderRadius:5,
        backgroundColor:"#fff",
        paddingHorizontal:10,
        justifyContent:"center"
    },
    PrevBtnText : {
        color:"#000",
        fontSize:16
    },
    List : {
        marginTop:10,
        marginHorizontal:10
    },
    Item : {
        borderWidth:1,
        borderRadius:5,
        padding:7,
        marginTop:10
    }
})



