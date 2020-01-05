import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { Accelerometer } from 'expo-sensors';


function round(n) {
    if (!n) {
      return 0;
    }
    return Math.floor(n * 100) / 100;
}


function RoomScreen (props) {
    
    const [loadingSecs, setLoadingSecs] = useState(5);
    const [isActive, setIsActive] = useState(false);
    const [GameSecs, setGameSecs] = useState(80);
    const [isEndGame, setIsEndGame] = useState(false);

    // ACC
    const [AccData, setAccData] = useState({});
    const [leftFlag, setLeftFlag] = useState(false);
    const [rightFlag, setRightFlag] = useState(false);

    // display
    const [display, setDisplay] = useState('');
    const [listCount, setListCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);

    // timeLeap
    const [timeLeapFlag, setTimeLeapFlag] = useState(false);
    const [timeLeap, setTimeLeap] = useState(1);
  
    const { list } = props.navigation.state.params;

    // ============ time control
    useEffect(() => {
        if (loadingSecs <= 0){
            setIsActive(true);
            return;
        }
        const intervalId = setInterval(() => {
            setLoadingSecs(loadingSecs - 1);
          }, 1000);
        setDisplay(loadingSecs);

        return () => clearInterval(intervalId);

    },[loadingSecs])

    useEffect(() => {
        let intervalId2 = null;
        if (listCount > 9){
            setDisplay('Game Over');
            setIsEndGame(true);
            return;
        }
        if (GameSecs <= 0){
            setIsEndGame(true);
            return;
        }
        if (isActive){
            intervalId2  = setInterval(() => {
                setGameSecs(GameSecs - 1);
              }, 1000);
        }
        return () => clearInterval(intervalId2);

    },[GameSecs, isActive])


    useEffect(() => {

        if (timeLeap <= 0){
            setTimeLeapFlag(false);
            setTimeLeap(1)
            return;
        }
        let intervalId3 = null;
        if (timeLeapFlag){
           intervalId3 = setInterval(() => {
                setTimeLeap(timeLeap - 1);
              }, 1000);
        }
        return () => clearInterval(intervalId3);

    },[timeLeapFlag, timeLeap])
    // ============


    // ============ shake & display control
    useEffect(() => {
        if (isActive && (listCount <= 9)){
            setDisplay(list[listCount]);
        }
        let tempData = round(AccData.x);
        if ((tempData < 0.4) && (tempData > -0.4)){
            setLeftFlag(false);
            setRightFlag(false);
        }
        if (tempData < -2 && !leftFlag && !timeLeapFlag){
            console.log("left " + tempData);
            setLeftFlag(true);
            setTimeLeapFlag(true);
            setListCount(listCount + 1);
            setCorrectCount(correctCount + 1);
        }
        if (tempData > 2 && !rightFlag  && !timeLeapFlag){
            console.log("right " + tempData);
            setRightFlag(true);
            setTimeLeapFlag(true);
            setListCount(listCount + 1);
        }
    }, [AccData, isActive]);


    useEffect(() => {
        if (isEndGame){
            this._subscription && this._subscription.remove();
            this._subscription = null;
        }

        if (isActive && !isEndGame){
            this._subscription = Accelerometer.addListener(AccelerometerData => {
                setAccData(AccelerometerData);
                });
        }
      }, [isActive, isEndGame]);

    Accelerometer.setUpdateInterval(80);

    // useEffect(() => {

    // }, [isActive, isEndGame])

  
    return (
        <View style={{flex: 1, backgroundColor: '#8DD7F2'}}>
            <Text style={{fontSize: 30, color: 'black', fontWeight:'bold', textAlign: 'center'}}>
                {GameSecs} Secs
            </Text>

            <Text style={{fontSize: 160,color: 'red', fontWeight: 'bold', textAlign: 'center'}}>
                {display}
            </Text>
            {isEndGame && <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>Count: {correctCount}</Text>}
        </View>
    )
}


RoomScreen.navigationOptions = ({ navigation }) => ({
    header: navigation.getParam('header', null)
})

export default RoomScreen;