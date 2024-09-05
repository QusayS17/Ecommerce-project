import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import styles from './styles/homescreenstyle';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Dropdown from '../components/dropdown';
import ImageSlider from '../components/slider';


const HomeScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState('Baalbaek-2973'); // Default location

  const locations = [
    { id: '1', name: 'Baalbaek-2973' },
    { id: '2', name: 'Beirut-1107' },
    { id: '3', name: 'Tripoli-4002' },
    { id: '4', name: 'Zahle-2010' },
  ];

  const list = [
    {
      id: '0',
      image: 'https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg',
      name: 'Home',
    },
    {
      id: '1',
      image: 'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg',
      name: 'Deals',
    },
    {
      id: '3',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg',
      name: 'Electronics',
    },
    {
      id: '4',
      image: 'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg',
      name: 'Mobiles',
    },
    {
      id: '5',
      image: 'https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg',
      name: 'Music',
    },
    {
      id: '6',
      image: 'https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg',
      name: 'Fashion',
    },
  ];

  const images = [
    'https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg',
];
const deals = [
  {
    id: "20",
    title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    oldPrice: 25000,
    price: 19000,
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
    ],
    color: "Stellar Green",
    size: "6 GB RAM 128GB Storage",
  },
  {
    id: "30",
    title:
      "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
    oldPrice: 74000,
    price: 26000,
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
      "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
    ],
    color: "Cloud Navy",
    size: "8 GB RAM 128GB Storage",
  },
  {
    id: "40",
    title:
      "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
    oldPrice: 16000,
    price: 14000,
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
    ],
    color: "Icy Silver",
    size: "6 GB RAM 64GB Storage",
  },
  {
    id: "40",
    title:
      "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
    oldPrice: 12999,
    price: 10999,
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
    carouselImages: [
      "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
      "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
    ],
  },
];
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, backgroundColor: 'white', flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: '#00CED1', padding: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Pressable style={styles.searchbar}>
            <EvilIcons style={{ paddingLeft: 10 }} name="search" size={24} color="black" />
            <TextInput placeholder='Search Items..' />
          </Pressable>
        </View>

        <View>
          <Dropdown
            data={locations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((item, index) => (
            <Pressable key={index} style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ width: 50, height: 50 }} source={{ uri: item.image }} />
              <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <ImageSlider images={images} slideway={true} />
       
       <Text style={{padding: 10, fontSize:18 , fontWeight:18 , color:"#666666"}}>Trending Deals of the week</Text>
       <View style={{flexDirection:"row", alignItems:"center" , flexWrap:"wrap"}}>
        {deals.map((item , index)=>(
          <Pressable style={{marginVertical:10 , flexDirection:"row" , alignItems:"center"}}>
            <Image source={{uri:item.image}} style={{width: 180 , height:180 , resizeMode:"contain"}}/>
          </Pressable>
        ))}
       </View>
       <Text style={{ height: 1 , borderColor:"#D0D0D0" , borderWidth:2}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
