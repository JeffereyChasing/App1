import {React,useState}  from 'react'
import {View, SafeAreaView, Flatlist, Text} from 'react-native'
import {COLORS,NFTData} from '../constants'
//Flatlist only render items when they are about to appear on the screen
// deletes when off view. lazy loading for better optimization

import {NFTCard,HomeHeader, FocusedStatusBar} from '../components'

const Home = () => {
  return (
    <SafeAreaView style = {{flex:1}}>

    </SafeAreaView>
  )
}

export default Home