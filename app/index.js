import React, {Component} from 'react';
import {
    Text,
    View,
    Navigator
} from 'react-native';

import Home from './home'
import Component1 from './component1'
import Component2 from './component2'
import Component3 from './component3'

const CustomSceneConfig = function(state){
    if(!state) {
        state = "PushFromRight"
    }
    return Object.assign({}, Navigator.SceneConfigs[state], {
        // Rebound spring parameters when transitioning FROM this scene
        springTension: 200,
        springFriction: 26,
        // Velocity to start at when transitioning without gesture
        defaultTransitionVelocity: 1.5,
        gestures: {
            pop: Object.assign({}, Navigator.SceneConfigs[state].gestures.pop, {
                edgeHitWidth: 0,
            })
        }
    })
}

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const navigatorProps = {
            initialRoute: {name:"Home"},
            renderScene: (route, navigator) => {
                var _this = this;
                const routeName = route.name;

                switch (routeName) {
                    case 'Home' :
                        return (
                            <Home title="Home" navigator={navigator} />
                        );
                        break;
                    case 'Component1' :
                        return (
                            <Component1 title="컴포넌트1" navigator={navigator} />
                        );
                        break;
                    case 'Component2' :
                        return (
                            <Component2 title="컴포넌트2" navigator={navigator} />
                        );
                        break;
                    case 'Component3' :
                        return (
                            <Component3 title="컴포넌트3" navigator={navigator} />
                        );
                        break;
                    default :
                        return (
                            <View><Text>not routeId - Error</Text></View>
                        );
                        break;
                }
            },
            configureScene : (route)=>{
                return CustomSceneConfig(route.sceneConfig);
            }
        }
        return (
            <Navigator {...navigatorProps} ref="AppsNav" />
        );
    }
}