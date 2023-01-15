import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  const user_details = {
    name: 'S.G.',
    age: 24,
  };

  const setData = () => {
    // AsyncStorage.setItem("name", "S.G.");
    // AsyncStorage.setItem("age", JSON.stringify(24))
    AsyncStorage.setItem('user_details', JSON.stringify(user_details));
  };

  const showData = async () => {
    let user = await AsyncStorage.getItem('user_details');
    user = JSON.parse(user);
    console.log(typeof user, user);
    setName(user.name);
    setAge(user.age);
    // const name = await AsyncStorage.getItem("name");
    // const age = await AsyncStorage.getItem("age");
    // console.log(name);
    // console.log(typeof(age), age)
  };

  const clearData = () => {
    AsyncStorage.clear();
  }

  return (
    <View>
      <View style={{margin: 20}}>
        <Button title="Set Data" onPress={setData} />
      </View>

      <View style={{margin: 20}}>
        <Button title="Show Data" onPress={showData} />
      </View>

      <View style={{margin: 20}}>
        <Button title="Clear Data" onPress={clearData} />
      </View>

      {name ? (
        <Text style={{ fontSize: 19, color: 'black', margin: 20 }}>
          {name} {age}
        </Text>
      ) : null}
    </View>
  );
}
