import React from 'react';
import { Text, View } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
const Header = ({ count }) => {
    return (
        <View style={{ backgroundColor: '#fff', height: 60, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome6 name={'arrow-left'} color={'black'} size={25} />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '500', color: 'black' }}>{'Products'}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Feather name={'search'} color={'black'} size={24} style={{ marginRight: 10 }} />
                    <Feather name={'shopping-cart'} color={'black'} size={24} />
                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', bottom: 10, }}>
                        <Text style={{ fontSize: 10, color: '#fff' }}>{count}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Header;
