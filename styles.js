import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    padding: 10,
    color: "blue",
    backgroundColor: "lightgray",
    marginVertical: 8,
    textAlign: "center",
    alignSelf: 'center',
    width: '80%',
  },
  list: {
    paddingTop: 20,
    width: '100%',
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
    paddingBottom: 20,
  },
  modalButton: {
    marginTop: 10,
  },
});