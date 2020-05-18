// import React, { useEffect, useState } from 'react'
// import { TouchableOpacity, StyleSheet,  Button, View, Text } from 'react-native';
// import { Accelerometer } from 'expo-sensors';

// function round(n) {
//     if (!n) {
//       return 0;
//     }
//     return Math.floor(n * 100) / 100;
// }

// export default function RoomScreen (props) {
    
//     const { category } = props.navigation.state.params;
//     // console.log(category);

//     const [seconds, setSeconds] = useState(0);
//     const [isActive, setIsActive] = useState(false);
//     const [AccData, setAccData] = useState({});
//     const [leftFlag, setLeftFlag] = useState(false);
//     const [rightFlag, setRightFlag] = useState(false);

  
//     function toggle() {
//       setIsActive(!isActive);
//     }
  
//     function reset() {
//       setSeconds(0);
//       setIsActive(false);
//     }
  
//     useEffect(() => {
//       let interval = null;
//       if (isActive) {
//         interval = setInterval(() => {
//           setSeconds(seconds => seconds + 1);
//         }, 1000);
//       } else if (!isActive && seconds !== 0) {
//         clearInterval(interval);
//       }
//       return () => clearInterval(interval);
//     }, [isActive, seconds]);
  
//     useEffect(() => {
//         _toggle();
//       }, []);
    
//     useEffect(() => {
//         return () => {
//           _unsubscribe();
//         };
//       }, []);

//     useEffect(() => {
//         let tempData = round(AccData.x);
//         if ((tempData < 0.15) && (tempData > -0.15)){
//             setLeftFlag(false);
//             setRightFlag(false);
//         }

//         if (tempData > 0.8 && !rightFlag){
//             console.log("right " + tempData);
//             setRightFlag(true);
//         }

//         if (tempData < -0.8 && !leftFlag){
//             console.log("left " + tempData);
//             setLeftFlag(true);
//         }
//     }, [AccData]);

//     const _toggle = () => {
//         if (this._subscription) {
//         _unsubscribe();
//         } else {
//         _subscribe();
//         }
//     };


//     const _subscribe = () => {
//         this._subscription = Accelerometer.addListener(AccelerometerData => {
//         setAccData(AccelerometerData);
//         });
//     };

//     const _unsubscribe = () => {
//         this._subscription && this._subscription.remove();
//         this._subscription = null;
//     };

//     let { x, y, z } = AccData;
//     Accelerometer.setUpdateInterval(100);

//     return (
//         <View style={{ flex: 1}}>
//             <Text>
//                 {seconds}secs
//             </Text>
//             <Button 
//                 onPress={toggle}
//                 title={isActive ? 'Pause' : 'Start'}
//             />
//             <Button 
//                 onPress={reset}
//                 title="reset" 
//             />
//             <Text style={styles.text}>Accelerometer:</Text>
//             <Text style={styles.text}>
//                 x: {round(x)} y: {round(y)} z: {round(z)}
//             </Text>
//             <View style={styles.buttonContainer}>
//                 <TouchableOpacity onPress={_toggle} style={styles.button}>
//                 <Text>Toggle</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     buttonContainer: {
//       flexDirection: 'row',
//       alignItems: 'stretch',
//       marginTop: 15,
//     },
//     button: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#eee',
//       padding: 10,
//     },
//     middleButton: {
//       borderLeftWidth: 1,
//       borderRightWidth: 1,
//       borderColor: '#ccc',
//     },
//     sensor: {
//       marginTop: 45,
//       paddingHorizontal: 10,
//     },
//     text: {
//       textAlign: 'center',
//     },
//   });