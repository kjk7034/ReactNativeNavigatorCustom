'use strict';
import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Navigator,
    Text
} from 'react-native';

import {Style} from './style.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    navPush(name, style){
        this.props.navigator.push({
            name : name,
            sceneConfig : style
        })
    }
    navPop(){
        this.props.navigator.pop()
    }
    render() {
        return (
            <View style={Style.Wrapper}>
                <View style={Style.Header}>
                    <Text style={Style.Title}>{this.props.title}</Text>
                </View>
                <View style={Style.List}>
                    <View style={Style.Item}>
                        <TouchableOpacity style={Style.Btn} onPress={()=>this.navPush("Component1")} activeOpacity={0.65}>
                            <Text style={Style.BtnText}>Component1 이동</Text>
                            <Text style={Style.BtnText}>액션 : PushFromRight (default)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.Item}>
                        <TouchableOpacity style={Style.Btn} onPress={()=>this.navPush("Component2","FloatFromBottom")} activeOpacity={0.65}>
                            <Text style={Style.BtnText}>Component2 이동</Text>
                            <Text style={Style.BtnText}>액션 : FloatFromBottom</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.Item}>
                        <TouchableOpacity style={Style.Btn} onPress={()=>this.navPush("Component3","VerticalUpSwipeJump")} activeOpacity={0.65}>
                            <Text style={Style.BtnText}>Component3 이동</Text>
                            <Text style={Style.BtnText}>액션 : VerticalUpSwipeJump</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}