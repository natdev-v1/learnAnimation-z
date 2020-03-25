import React, { useEffect, useState } from 'react'
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing,
    Button} from 'react-native'
import images from '../../themes/images'
    
const HomeScreen = () => {
    const [gear, setGear] = useState(0)
    const listGear = [0,1,2,3,4,5]
    useEffect(() => {
        spin()
        return () => {
            
        }
    }, [gear])

    const spinValue = new Animated.Value(0)
    const spin = ()=>{
        spinValue.setValue(0)
        Animated.timing(
            spinValue,
          {
            toValue: gear,
            duration: 4000,
            easing: Easing.linear,
          }
        ).start(() =>spin())
    }

    const a = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <Image style={
                { 
                width:310,
                height: 450,
                marginTop:100
                }}
                source={images.head}
                >

            </Image>
           <Animated.Image
                style={{
                position:'absolute',
                width:260,
                top:43,
                height: 250,
                marginTop:100,
                transform: [{rotate: a}], }}
                source={images.propeller}/>
        <View style={styles.containerGear}>
        {listGear.map((data)=>{
            return  <Button style={{width:10}} onPress={()=>{setGear(data*2)}} title={data+''}></Button>

        })}
        </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
containerGear:{
marginTop:100,
flexDirection:'row',
width:170,
position:'absolute',
top:405,
left:102.5,
justifyContent:'space-around'
}
})
