## React Native Navigator Custom

테스트 버전 : "react-native": "^0.34.1"

리엑트 네이티브에서 Navigator를 직접 사용하다 보니 어느 정도 custom을 해야 사용할 수 있을 것 같았다.

내가 느낀 가장 큰 하나는 navigator.push를 이용해서 계속 Route를 쌓은 후 테스트를 해보자.

왼쪽 영역(default 30)을 터치해서 우측으로 swipe가 되면서 pop이 된다.

난 해당 기능을 구현한 적이 없는데... 팀에서 이슈사항으로 발견... 두둥...

결국 소스 원본을 뒤져서야 이해를 했다. (https://github.com/facebook/react-native/blob/master/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js)

```
const BaseLeftToRightGesture = {

  // If the gesture can end and restart during one continuous touch
  isDetachable: false,

  // How far the swipe must drag to start transitioning
  gestureDetectMovement: 2,

  // Amplitude of release velocity that is considered still
  notMoving: 0.3,

  // Fraction of directional move required.
  directionRatio: 0.66,

  // Velocity to transition with when the gesture release was "not moving"
  snapVelocity: 2,

  // Region that can trigger swipe. iOS default is 30px from the left edge
  edgeHitWidth: 30,

  // Ratio of gesture completion when non-velocity release will cause action
  stillCompletionRatio: 3 / 5,

  fullDistance: SCREEN_WIDTH,

  direction: 'left-to-right',

};
```

여기에서 edgeHitWidth 이 부분의 영향이었다... 이 부분을 초기화 하기 위해서 다음과 같이 custom을 해서 사용했다.

```
const CustomSceneConfig = function(state){
    if(!state) {
        state = "FloatFromLeft"
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
```

위의 코드는 Navigator.SceneConfigs.PushFromRight (default)를 "FloatFromLeft"으로 변경하고, defaultTransitionVelocity를 조금 빠르게 하기 위해서 이 부분도 같이 custom 하기로 했다.

```
Navigator.SceneConfigs.PushFromRight (default)
Navigator.SceneConfigs.FloatFromRight
Navigator.SceneConfigs.FloatFromLeft
Navigator.SceneConfigs.FloatFromBottom
Navigator.SceneConfigs.FloatFromBottomAndroid
Navigator.SceneConfigs.FadeAndroid
Navigator.SceneConfigs.HorizontalSwipeJump
Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
Navigator.SceneConfigs.VerticalUpSwipeJump
Navigator.SceneConfigs.VerticalDownSwipeJump

this.props.navigator.push({
    name : name,
    sceneConfig : style
})
```

기본 SceneConfigs는 위와 같으며, push 할 때, sceneConfig 값을 넘겨서 사용했다.
자세한 내용은 예제를 통해서 확인 할 수 있다.