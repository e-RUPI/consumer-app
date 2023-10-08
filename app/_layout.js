import { Stack } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Voucher from "./vouchers";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import Schemes from "./schemes";

const Tab = createBottomTabNavigator();
export default function Layout() {
  return (
    <>
      {/* <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3289ed",
        },
        headerTintColor: "#f073d1",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    ></Stack> */}

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#000",
            paddingVertical: 10,

            // borderTopWidth: 0,
            // shadowOffset: { width: 0, height: 0 },
            // shadowColor: "rgba(0,0,0,0.1)",
            // shadowOpacity: 0.5,
            // elevation: 5,
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              // <AntDesign name="home" color={color} size={size} />
              <AntDesign name="home" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="vouchers"
          component={Voucher}
          options={{
            tabBarLabel: "Vouchers",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/images/voucher.png")}
                style={{ width: 31, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="schemes"
          component={Schemes}
          options={{
            tabBarLabel: "Schemes",
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require("../assets/images/scheme.png")}
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
