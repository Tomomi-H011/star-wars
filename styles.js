import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Platform } from 'react-native';

export default StyleSheet.create({

  NavigationContainer: {
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },customHeaderContainer: {
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoHeaderContainer: {
    width: '100%',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingTop: 35,
  },
  headerTitleStyle: {
    color: 'silver',
    fontFamily: 'Orbitron',
    fontSize:28,
    fontWeight: 'bold',
    marginTop: 25,
    paddingBottom: 10,
  },
  searchBoxContainer: {
    paddingTop: 30,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  searchInput: {
    height: 50,
    width: '80%',
    color: 'silver',
    fontFamily: 'Orbitron',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'transparent',
    opacity: 0.7,
    borderRadius: 5,
    borderColor: 'silver',
    borderWidth: 1.5,
    alignSelf: 'center',   
    paddingInline: 10, 
  },
  modalContainer: {
    width: '60%',
    height: '20%',
    alignSelf: 'center',
    marginTop: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    paddingStart: 10,
    paddingBottom: 20,
    flexWrap: 'wrap',
  },
  modalButton: {
    marginTop: 10,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  list: {
    paddingTop: 30,
    paddingBottom: 130,
    width: '100%',
  },
  listContent: {
    alignItems: 'center',
    width: '100%',
    paddingLeft: 25,
  },
  swipeContainer: {
    flexDirection: 'row',
    width: 470,
    height: 95,
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'right',
    marginVertical: 25,
    backgroundColor: 'transparent', 
  },
  swipeItemTouchable: {
    width: 470,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  swipeItem: {
  width: 400,
  minHeight: 50,
  borderRadius: 50,
  borderWidth: 1.5,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0.8,
  // Override shaddow with animation
  // borderColor: '#be0affdb',
  // backgroundColor: '#c5b3d1ff',
  shadowColor: '#be0affdb',
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 1,
  shadowRadius: 50,

  elevation: 10,

  boxShadow: '5px 5px 50px #be0affdb',
  },
  swipeItemText: {
    fontFamily: 'Orbitron',
    fontSize: 22,
    color: '#330d6fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    // textAlign: 'center',
    justifyContent: 'center',
  },
  swipeBlank: {
    width: 200, 
    minHeight: 60, 
    backgroundColor: 'transparent',
  },
  swipeScrollView: {
    width: 200,
  },
  swipeScrollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
});