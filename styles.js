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
    width: 300,
    height: 55,
    alignSelf: 'center',
    marginVertical: 15,
    // backgroundColor: 'red', //testing purpose
  },
  swipeItemTouchable: {
    width: 300,
  },
  swipeItem: {
    width: 300,
    minHeight: 50,
    paddingHorizontal: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
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