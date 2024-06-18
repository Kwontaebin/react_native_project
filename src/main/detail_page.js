import {View, Text, Image, TouchableOpacity,ScrollView, Button, Alert} from 'react-native';
import styles from './detail_page_style';
import React, { useEffect, useState, useContext } from 'react';
import { CounterContext } from './count';

const DetailPage = ({route, navigation})=>{
    const { data, allPrice, statusBG } = route.params;
    let [count, setCount] = useState(1);
    let [price, setPrice] = useState(data.Price[0].Price);
    const [checked, setChecked] = React.useState(null);
    let menuSize = [
        {title: "기본", price: "+0", value: 0},
        {title: "반 추가", price: "+" + data.Price[0].Price / 2 + "원", value: data.Price[0].Price / 2},
    ]
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {

    }, [count, price, selectedOption]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const minusFn=()=> {
        if(count > 1) {
            setCount(count -= 1);
            setPrice(price -= data.Price[0].Price)
        }
        global.num = price;

        console.log(statusBG);
    }

    const plusFn=()=> {
        if(count < 3) {
            setCount(count += 1);
            setPrice(price += data.Price[0].Price)
        } else {
            Alert.alert(
                  "알림",
                  "최대 수량을 초과하였습니다 \n 1인당 3개까지 구매 가능합니다.",
            );
        }

        global.num = price;
    }

   const moveMainPage=()=> {
        navigation.navigate('Main');
        global.num = allPrice;
    }

    const moveMainPageWithNum=()=> {
        navigation.navigate('Main');
        global.num = allPrice + price + menuSize[selectedOption].value;
    }

    return (
        <View style={styles.container }>
            <View style={styles.header, { backgroundColor: statusBG === true ? '#2B2B30' : 'white' }}>
                <View style={styles.headerBackImgDiv}>
                    <TouchableOpacity  underlayColor="transparent" onPress={moveMainPage}>
                        <Image source={require('../../assets/back_img.png')} style={styles.backImg}/>
                    </TouchableOpacity>
                </View>
                {data.Img ? (
                    <Image style={styles.headerImg} source={{uri : `${data.Img}`}} />
                ) : (
                    <Image style={styles.headerImg} source={require('../../assets/Frame_199.png')} />
                )}
            </View>

            <ScrollView style={styles.main} showsVerticalScrollIndicator={false} >
                <View style={styles.mainFood, { backgroundColor: statusBG === true ? '#2B2B30' : 'white' }}>
                    <View style={styles.mainFoodName}>
                        <Text style={[styles.mainFoodNameText, { color: statusBG === true ? 'white' : 'black' }]}>{data.Name}</Text>
                    </View>

                    <View style={styles.mainFoodIntroduce}>
                        {data.Description ? (
                                <Text style={[styles.mainFoodIntroduceText, { color: statusBG === true ? 'white' : 'black' }]}>{data.Description}</Text>
                        ) : (
                            <Text style={[styles.mainFoodIntroduceText, { color: statusBG === true ? 'white' : 'black' }]}>{data.Name}</Text>
                        )}

                    </View>

                    <View style={styles.mainFoodPrice}>
                        <View style={styles.mainFoodPriceLeft}>
                            <Text style={[styles.mainFoodPriceLeftText, { color: statusBG === true ? 'white' : 'black' }]}>{data.Price[0].Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Text>
                        </View>

                        <View style={styles.mainFoodPriceRight}>
                            <TouchableOpacity onPress={minusFn} style={[styles.minusBtn, { backgroundColor: count === 1 ? '#C0C0C0' : '#808080'}]}>
                               <Text>-</Text>
                            </TouchableOpacity>

                            <Text style={[styles.countText, { color: statusBG === true ? 'white' : 'black' }]}>{count}</Text>

                            <TouchableOpacity onPress={plusFn} style={[styles.plusBtn, { backgroundColor: count === 3 ? '#C0C0C0' : '#808080'}]}>
                               <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.mainChoice, { backgroundColor: statusBG === true ? '#2B2B30' : 'white' }}>
                    <View style={styles.mainChoiceHeader}>
                        <Text style={[styles.mainChoiceHeaderText, { color: statusBG === true ? 'white' : 'black' }]}>기본</Text>
                        <View style={styles.mainChoiceHeaderView}>
                            <Text style={styles.mainChoiceHeaderViewText}>필수</Text>
                        </View>
                    </View>

                    <View style={styles.mainChoiceMain}>
                        {selectedOption === 0 ? (
                               <Image source={require('../../assets/select_radio.png')} style={styles.mainChoiceMainViewRadioBtn1}/>
                               ): (
                               <Image source={require('../../assets/radio.png')} style={styles.mainChoiceMainViewRadioBtn1}/>
                        )}

                        {menuSize.map((data, idx) => (
                             <TouchableOpacity key={idx} onPress={() => handleOptionSelect(idx)}>
                                    <Text style={[styles.mainChoiceMainViewTitle, { color: statusBG === true ? 'white' : 'black' }]}>{data.title}</Text>
                                    <Text style={[styles.mainChoiceMainViewPrice, { color: statusBG === true ? 'white' : 'black' }]}>{data.price}</Text>
                             </TouchableOpacity>
                        ))}

                        {selectedOption === 1 ? (
                               <Image source={require('../../assets/select_radio.png')} style={styles.mainChoiceMainViewRadioBtn2}/>
                               ): (
                               <Image source={require('../../assets/radio.png')} style={styles.mainChoiceMainViewRadioBtn2}/>
                        )}
                    </View>
                </View>

                <View style={styles.mainChoiceDrink, { backgroundColor: statusBG === true ? '#2B2B30' : 'white' }}>

                </View>
            </ScrollView>

            <View style={styles.Footer}>
               <TouchableOpacity  underlayColor="transparent" onPress={moveMainPageWithNum}>
                    <View style={styles.FooterInner}>
                        <Text style={styles.FooterInnerText}>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 | 장바구니 담기</Text>
                    </View>
               </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailPage;