import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter, Link } from "expo-router";

import loginImg from "../assets/images/login.gif";

export default function login() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Stack.Screen
        options={{
          title: params.name,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#fff",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 16, alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: 600 }}>Log In</Text>
        </View>

        <View style={{ padding: 32, alignItems: "center" }}>
          {/* <Text>Graphic</Text> */}
          {/* <Image source={require("../assets/images/login.gif")} /> */}
          <Image source={loginImg} style={{ width: 330, height: 250 }} />
        </View>

        <View style={{ paddingLeft: 48, paddingRight: 48 }}>
          <Text style={{ fontSize: 18, fontWeight: 500, paddingTop: 16 }}>
            Phone no:{" "}
          </Text>
          <View
            style={{
              // flex: 1,
              flexDirection: "row",
              alignItems: "left",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                borderColor: "#000",
                borderWidth: 1.5,
                borderRadius: 30,
                height: 45,
              }}
            >
              <TextInput
                style={{ width: "100%", height: "100%", paddingHorizontal: 16 }}
              />
            </View>
          </View>

          <Text style={{ fontSize: 18, fontWeight: 500, paddingTop: 16 }}>
            Password:{" "}
          </Text>
          <View
            style={{
              // flex: 1,
              flexDirection: "row",
              alignItems: "left",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                borderColor: "#000",
                borderWidth: 1.5,
                borderRadius: 30,
                height: 45,
              }}
            >
              <TextInput
                style={{
                  // fontSize: 22,
                  width: "100%",
                  height: "100%",
                  paddingHorizontal: 16,
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 36, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#5A6FEB",
              borderRadius: 30,
              paddingVertical: 10,
              paddingHorizontal: 45,
              marginTop: 8,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 24, alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: 400, color: "#000000B2" }}>
            Don’t have an account?
          </Text>
          <Link
            href={{ pathname: "signup" }}
            style={{
              fontSize: 22,
              fontWeight: 600,
              textDecorationLine: "underline",
            }}
          >
            Register
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
