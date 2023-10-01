import { Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
export default ()=> {
  return (
    <>

    <Stack.Screen
    options={{headerTitle:"Tabs"}}
    />
    <Tabs>
      <Tabs.Screen name="home1" options={{headerShown:true,
      tabBarIcon:({size,color})=>(<FontAwesome name="home" size={size} color={color} />),
      }} />
      <Tabs.Screen name="vouchers" options={{headerShown:false}}/>
      <Tabs.Screen name="schemes" options={{headerShown:false}}/>
    </Tabs>
    </>

  );
}