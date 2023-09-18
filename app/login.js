import { View, Text } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function login() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Stack.Screen
        options={{
          title: params.name,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#fff",
        }}
      />
      <Text>Login Page</Text>
    </View>
  );
}
