import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 360,
    height: 760,
    backgroundColor: "#FFFFFF"
  },

  header: {
    width: 360,
    height: 270,
  },

  headerImg: {
      width: 360,
      height: 270,
  },

  headerBackImgDiv: {
    width: 30,
    height: 30,
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    position: "relative",
    left: 20,
    top: 40,
    zIndex: 999,
    borderRadius: 10,
  },

  backImg: {
    width: 24,
    height: 24,
    position: "relative",
    left: 3,
    top: 3,
  },

  main: {
    width: 360,
    height: 490,
    backgroundColor: "#FFFFFF"
  },

  mainFood: {
    width: 360,
    height: 150,
  },

  mainFoodName: {
    width: 360,
    height: 50,
  },

  mainFoodNameText: {
    fontSize: 20,
    fontWeight: "700",
    position: 'relative',
    left: 20,
    top: 10,
  },

  mainFoodIntroduce: {
    width: 360,
    height: 50,
  },

  mainFoodIntroduceText: {
    color: "#5E5E5E",
    fontSize: 13,
    position: 'relative',
    left: 20,
    top: 10,
  },

  mainFoodPrice: {
    width: 360,
    height: 50,
    flexDirection: 'row',
  },

  mainFoodPriceLeft: {
    width: 180,
    height: 50,
  },

  mainFoodPriceLeftText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "600",
    position: 'relative',
    left: 20,
    top: 10,
  },

  mainFoodPriceRight: {
    width: 180,
    height: 50,
  },

  minusBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    left: 20,
    top: 5,
  },

  countText: {
    fontSize: 18,
    fontWeight: "700",
    position: "relative",
    left: 90,
    bottom: 27,
  },

  plusBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative",
    left: 130,
    bottom: 57,
  },

  mainChoice: {
      width: 360,
      height: 150,
  },

  mainChoiceHeader: {
    width: 360,
    height: 50,
  },

  mainChoiceHeaderText: {
    fontSize: 16,
    fontWeight: "800",
    position: 'relative',
    left: 20,
    top: 10,
  },

  mainChoiceHeaderView: {
    width: 37,
    height: 20,
    borderRadius: 5,
    position: 'relative',
    left: 55,
    bottom: 7,
    backgroundColor: "#7566FF",
  },

  mainChoiceHeaderViewText: {
    textAlign: "center",
    color: "#FFFFFF",
    position: 'relative',
    top: 2,
  },

  mainChoiceMain: {
    width: 360,
    height: 100,
  },

  mainChoiceMainView: {
    width: 360,
    height: 24,
    marginTop: 10,
  },

  mainChoiceMainViewTitle: {
    fontSize: 14,
    fontWeight: "400",
    position: 'relative',
    top: 5,
    left: 20,
  },

  mainChoiceMainViewPrice: {
    fontSize: 14,
    fontWeight: "800",
    position: 'relative',
    bottom: 10,
    left: 240,
  },

  mainChoiceMainViewRadioBtn1: {
    position: 'relative',
    top: 25,
    left: 320,
  },

  mainChoiceMainViewRadioBtn2: {
    position: 'relative',
    bottom: 30,
    left: 320,
  },

  mainChoiceDrink: {
      width: 360,
      height: 200,
  },

  Footer: {
    width: 360,
    height: 180,
    backgroundColor: "#FFFFFF"
  },

  FooterInner: {
    width: 328,
    height: 54,
    backgroundColor: "#7566FF",
    position: 'relative',
    left: 15,
    top: 10,
    borderRadius: 10
  },

  FooterInnerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "700",
    position: "relative",
    top: 15,
  },
});