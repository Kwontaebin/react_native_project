import React, { useEffect, useState, useContext } from 'react';
import {View, Text, Image, Alert, ScrollView, TouchableHighlight, TouchableOpacity, Button} from 'react-native';
import axios from 'axios';
import styles from './main_style';
import { CounterContext } from './count';
import { useFocusEffect } from '@react-navigation/native';

const Main = ({route, navigation}) => {
    let lanList = [
        {title: "한국어", lan: "ko"},
        {title: "English", lan: "en"},
        {title: "中文", lan: "zh-Hans"},
        {title: "日本語", lan: "ja"},
    ]
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    let [allPrice, setAllPrice] = useState(0);
    const [storeName, setStoreName] = useState(null);
    const [lan, setLan] = useState("ko");
    const [viewListStatus, setViewListStatus] = useState(false);
    let [foodCount, setFoodCount] = useState(0);
    const [cart, setCart] = useState(false);
    const [viewChangeLanList, setViewChangeLanList] = useState(false);
    const [statusBG, setStatusBG] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
            let url = "https://ct.pointda.com/api/menu/" + lan;
            const response = await axios.get(url, {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              }
            });
            setData(response.data.menu_info);
            setStoreName(response.data.store_info.name)
        };
        fetchData();
    }, [lan]);

      useFocusEffect(
        React.useCallback(() => {
            if(global.num != undefined) {
              setAllPrice(allPrice + global.num)
              global.num = 0;
              setCart(true);
              setFoodCount(foodCount += 1);
              console.log(global.num);
              console.log(allPrice);
            }
        }, [])
      );

    const showList=()=> {
        setViewListStatus(!viewListStatus);
    }

    const changeBG=()=> {
        setStatusBG(!statusBG);
    }

    const changeLanList=()=> {
        setViewChangeLanList(!viewChangeLanList);
        showList();
    }

    const hideLanList=()=> {
        setViewChangeLanList(!viewChangeLanList);
    }

    const handlePress = (index) => {
        if(data[index].MenuInfo[0].isSoldOut == true) alert('품절입니다!')
        if(data[index].MenuInfo[0].isSoldOut != true) {
            setAllPrice(allPrice += data[index].MenuInfo[0].Price[0].Price);
            setFoodCount(foodCount += 1);
            setCart(true);
        }
    };

    const changeLan=(idx)=> {
        setLan(lanList[idx].lan);
        hideLanList();
    }

    const moveDetailPage=(index)=> {
        if(data[index].MenuInfo[0].isSoldOut == true) alert('품절입니다!')
        if(data[index].MenuInfo[0].isSoldOut != true) {
            navigation.navigate('Detail', { data: data[index].MenuInfo[0], allPrice: allPrice, statusBG: statusBG });
            global.num = 0;
        }
    }

	return(
    	<View style={styles.container, { backgroundColor: statusBG === true ? 'black' : 'white' }}>
    	    <View style={styles.header}>
    	        <View style={styles.header1} />

                <View style={styles.header2}>
                    <Text style={styles.header2Text}>{storeName}</Text>

                    <TouchableOpacity onPress={showList} underlayColor="transparent">
                       {viewListStatus ? (
                            <Image source={require('../../assets/hide_list.png')} style={styles.view_list_img}/>
                            ): (
                            <Image source={require('../../assets/show_list.png')} style={styles.view_list_img}/>
                       )}
                    </TouchableOpacity>

                    {viewListStatus ? (
                        <View style={styles.showListView}>
                            <TouchableOpacity onPress={changeLanList} underlayColor="transparent">
                                <Image source={require('../../assets/change_lan.png')} style={styles.changeLanImg}/>
                                <Text style={styles.changeLanText}>언어변경</Text>
                            </TouchableOpacity>
                        </View>
                    ): (
                        <View style={styles.hideListView}/>
                    )}

                    <TouchableOpacity onPress={changeBG} underlayColor="transparent">
                        {statusBG ? (
                            <Image source={require('../../assets/blackBG.png')} style={styles.bg_change_img}/>
                        ) : (
                            <Image source={require('../../assets/whiteBG.png')} style={styles.bg_change_img}/>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.header3}>
                    <Text style={[styles.header3Text, { color: statusBG === true ? 'white' : 'black' }]}>드림에이지이</Text>
                    <Text style={[styles.header3Text, { color: statusBG === true ? 'white' : 'black' }]}>가산디지털단지점</Text>
                </View>
    	    </View>

    	    <View style={styles.main}>
    	         <View style={styles.mainHeader}>
                 </View>

                 {data ? (
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
                      {Array.from({ length: 5 }, (_, index) => (
                        <View style={styles.mainDiv} key={index}>
                          <View style={styles.mainDivInner} key={index}>
                            <TouchableOpacity style={styles.button} underlayColor="transparent" onPress={() =>  moveDetailPage(index)}>
                                  {data[index].MenuInfo[0].Img ? (
                                    <Image style={styles.image} source={{uri : `${data[index].MenuInfo[0].Img}`}} />
                                  ) : (
                                    <Image source={require('../../assets/Frame_199.png')} style={styles.image}/>
                                  )}
                            </TouchableOpacity>
                            <Text style={[styles.mainText, { color: statusBG === true ? 'white' : 'black' }]}>{data[index].MenuInfo[0].Name}</Text>
                            <Text style={[styles.mainPrice, { color: statusBG === true ? 'white' : 'black' }]}>{data[index].MenuInfo[0].Price[0].Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>

                            <TouchableHighlight style={styles.button} onPress={() => handlePress(index)} underlayColor="transparent">
                              {data[index].MenuInfo[0].isSoldOut ? (
                              <Image source={require('../../assets/sold_out.png')} style={styles.buyBtn}/>
                              ) : (
                              <Image source={require('../../assets/buyBtn.png')} style={styles.buyBtn}/>
                              )}
                            </TouchableHighlight>
                          </View>
                        </View>
                    ))}
                    </ScrollView>
                 ) : (
                    <Text>Loading...</Text>
                 )}

                 {cart ? (
                    <View style={styles.footer}>
                        <View style={styles.footerInner}>
                            <Text style={styles.footerInnerText}>{allPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 | 장바구니 {foodCount}</Text>
                        </View>
                    </View>
                 ) : (
                    <View style={styles.hideListView}/>
                 )}

                 {viewChangeLanList ? (
                    <View style={styles.showLanList, { backgroundColor: statusBG === true ? 'grey' : 'white' }}>
                        <View style={styles.showLanListHeader }>
                            <Text style={[styles.showLanListHeaderText, { color: statusBG === true ? 'white' : 'black' }]}>언어변경</Text>

                            <TouchableOpacity onPress={hideLanList} underlayColor="transparent">
                                <Text style={styles.showLanListHeaderImg}>X</Text>
                            </TouchableOpacity >
                        </View>

                        <View style={styles.showLanListMain}>
                               {lanList.map((data, idx) => (
                               <TouchableHighlight key={data.lan} style={styles.button} onPress={() => changeLan(idx)} underlayColor="transparent">
                                   <View key={data.lan} style={styles.showLanListMainView}>
                                       <Text key={data.lan} style={[styles.text, { color: statusBG === true ? 'white' : 'black' }]}>{`${data.title}`}</Text>
                                   </View>
                               </TouchableHighlight>
                               ))}
                        </View>
                    </View>
                 ) : (
                    <View style={styles.hideListView}/>
                 )}
    	    </View>
        </View>
    )
}

export default Main;