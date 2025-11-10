import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchBoxContainer: {
    paddingTop: 20,
    width: '100%',
    alignSelf: 'center',
  },
  searchInput: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
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
    backgroundColor: 'white',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
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
    paddingTop: 20,
    width: '100%',
  },
  listContent: {
    alignItems: 'center',
    width: '100%',
  },
  swipeContainer: {
    flexDirection: 'row',
    minWidth: '80%',
    marginHorizontal: '10%',
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    // backgroundColor: 'red', //testing purpose
  },
  swipeItemTouchable: {
    width: '100%',
    justifyContent: 'center',
  },
  swipeItem: {
    width: '100%',
    minHeight: 50,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  swipeItemText: {
    fontSize: 18,
    color: 'blue',
    paddingHorizontal: 10,
    // textAlign: 'center',
    justifyContent: 'center',
  },
  swipeBlank: {
    width: 10, 
    minHeight: 60, 
    backgroundColor: 'transparent',
  },
  swipeScrollView: {
    width: '100%',
    alignContent: 'center',
  },
  swipeScrollContent: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});