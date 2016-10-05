import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Navigator,
    Text
} from 'react-native';

import {Style} from './style.js';

export default class Component1 extends Component {
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
                    <View style={Style.PrevBtnWrap}>
                        <TouchableOpacity style={Style.PrevBtn} onPress={()=>this.navPop()} activeOpacity={0.65}>
                            <Text style={Style.PrevBtnText}>이전</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Style.List}>
                    <View style={Style.Item}>
                        <TouchableOpacity style={Style.Btn} onPress={()=>this.navPush("Component2","FloatFromRight")} activeOpacity={0.65}>
                            <Text style={Style.BtnText}>Component2 이동</Text>
                            <Text style={Style.BtnText}>액션 : FloatFromRight</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Style.Item}>
                        <TouchableOpacity style={Style.Btn} onPress={()=>this.navPush("Component3","FloatFromLeft")} activeOpacity={0.65}>
                            <Text style={Style.BtnText}>Component3 이동</Text>
                            <Text style={Style.BtnText}>액션 : FloatFromLeft</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}