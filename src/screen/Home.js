import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Header from './Header'
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux'
import { Picker } from '@react-native-picker/picker';

const Home = () => {
    const [category, setCategory] = useState()
    const [count, setCount] = useState(0)

    const fetchData = useSelector(state => state.allData)
    const { data } = fetchData
    const defaultData = data[0].category
    const stateData = category && category.category
    const filteredData = stateData ? stateData : defaultData
    console.log('data....', data[0].category)


    const onClick = (data) => {
        setCategory(data)
    }

    const AddItemInCart = () => {
        setCount(count + 1)
    }

    return (
        <View>
            <Header count={count} />
            <ScrollView horizontal>
                {data.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => onClick(item)} style={styles.allitemview}>
                            <Image source={item.image} resizeMode='contain' style={styles.mainImage} />
                            <Text style={{ color: filteredData ? '#111' : '#06D6A0', }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
            <ScrollView>
                <View style={{ marginBottom: 40, top: 20 }}>
                    <FlatList
                        scrollEnabled
                        data={filteredData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ index, item }) => {
                            return (
                                <View key={index}>
                                    <View style={styles.flatlistmain}>
                                        <Image source={item.image} resizeMode='contain' style={styles.flatImg} />
                                        <View style={{ marginLeft: 10, width: '60%' }}>
                                            <Text>{item.title}</Text>
                                            <Text numberOfLines={2} style={{ marginTop: 10, }}>{item.desc}</Text>
                                            <Text style={{ marginTop: 10, fontSize: 18 }}>₹{item.price}</Text>
                                            <Text>{item.qantity}</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => AddItemInCart(item.price)} style={styles.addIcon}>
                                            <Icon name={'plus'} color={'#06D6A0'} size={20} />
                                            <Text style={{ color: '#06D6A0' }}>Add</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }} />

                </View>
            </ScrollView>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    flatlistmain: { flex: 1, flexDirection: "row", marginHorizontal: 10, backgroundColor: '#fff', marginVertical: 1, padding: 10, width: '95%', alignSelf: 'center', justifyContent: 'space-between' },
    allitemview: { margin: 4, justifyContent: 'center', alignItems: 'center', padding: 10 },
    mainImage: { height: 70, width: 70, borderRadius: 35 },
    flatImg: { height: 80, width: 80, borderRadius: 40 },
    addIcon: { backgroundColor: '#fff', borderRadius: 10, flexDirection: 'row', width: '30%', height: 30 }

})