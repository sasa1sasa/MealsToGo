import  React,{useState} from 'react';
import { View, Text, StyleSheet,FlatList,SafeAreaView } from 'react-native';
import {fontSizes,paddingSizes} from '../../utils/sizes';
import {RoundedButton} from '../../components/RoundedButton';



const HistoryItem = ({item,index})=>{
console.log(item);
  return(
    <Text style={styles.historyItem(item.status)}>
    {item.subject}
    </Text>
  )

}

export const FocusHistory=({focusHistory,onClear}) =>{

  const clearHistory=()=>{
    onClear();
  }

  return(
    
    <>
    <SafeAreaView style={{flex:1,alignItems:'center'}}>
    
    {!!focusHistory.length &&(
    
    <>
    <Text style={styles.title}>
    Zelene Boje su odradjeni Zadatci a Crvene oni koji nisu!
    </Text>
    <FlatList 
   
    style={{flex:1}}
    contentContainerStyle={{flex:1,alignItems:'center'}}
    data={focusHistory}
    renderItem={HistoryItem}
    />
    <Text style={styles.title1}>
     Dali zelis obrisati Listu Zadataka!
    </Text>
    <View style={styles.clearContainer}>
     <RoundedButton    
      color="red" size={100} title="obrisi" onPress={()=> onClear() }/>
    </View>
    
    </>


  )}
    </SafeAreaView>
     
    </>
     
  );

};

const styles= StyleSheet.create({
  historyItem:(status)=>({
    color: status > 1 ? 'red' : 'green',
    fontSize:fontSizes.md,
  }),
  title:{
    color:'white',
    fontSize:fontSizes.lg,
  },
  clearContainer:{
    color:'red',
    alignItems:'center',
    padding:paddingSizes.md,
  },
  title1:{
    color:'red',
    fontSize:fontSizes.lg,
  }
})