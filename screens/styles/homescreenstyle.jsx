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
//   btnContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     padding: 10,
//     backgroundColor: 'white', // Adjust background if needed
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
// },
infoContainer: {
  padding: 10,
},
title: {
  fontSize: 15,
  fontWeight: "500",
},
price: {
  fontSize: 18,
  fontWeight: "600",
  marginTop: 6,
},
divider: {
  height: 1,
  borderColor: "#D0D0D0",
  borderWidth: 1,
},
infoRow: {
  flexDirection: "row",
  alignItems: "center",
  padding: 10,
},
infoLabel: {
  fontWeight: "800",
  marginTop: 4,
},
infoValue: {
  fontWeight: "500",
},
btnContainer: {
  padding: 10,
  backgroundColor: 'white',
  borderTopWidth: 1,
  borderTopColor: '#D0D0D0',
  position: 'absolute',
  bottom: 0,
  width: '100%',
},
});

export default styles;
