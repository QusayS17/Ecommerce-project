import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    searchbar: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 7,
        gap: 10,
        backgroundColor: "white",
        borderRadius: 3,
        height: height * 0.06,
        width: width * 0.9,
        flexL: 1,
    },
    locationbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#AFEEEE',
    height: 50, 
    marginTop: 10,
    justifyContent: 'space-between', 
    width: width * 0.9, 
    alignSelf: 'center',
  },
  
 
  locationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    maxHeight: height * 0.4,
  },
  locationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#00CED1',
    fontSize: 18,
  },
});

export default styles;
