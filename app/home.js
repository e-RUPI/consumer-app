import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Stack, useLocalSearchParams, useRouter, Link } from "expo-router";
import Wallet from "../assets/images/payment.gif";
import { Card, Divider, Button } from "@rneui/base";
import coupon from "../assets/images/coupon.png";
import next from "../assets/images/next.png";
import { Avatar, Icon } from "@rneui/themed";
const Vouchers = [
  {
    name: "Active",
    number: 1,
  },
  {
    name: "Redeemed",
    number: 2,
  },
  {
    name: "Expired",
    number: 3,
  },
];

const Schemes = [
  {
    name: " Ministry of Health and Family Welfare",
    content: "Explore Health Schemes for you and your family",
  },
  {
    name: "Department of Agriculture & Farmers Welfare",
    content: "Crop Insurance, Farm Equipment, etc.",
  },
  {
    name: "Ministry of Education",
    content: "School, College, Coaching, etc.",
  },
];

export default function Home() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        padding: 20,
      }}
    >
      <Stack.Screen
        options={{
          title: params.name,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerRight: () => (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Link
                href={{ pathname: "vouchers", params: { name: "Vouchers" } }}
              >
                <Avatar
                  size={40}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
              </Link>
            </View>
          ),
        }}
      ></Stack.Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ----------------- Animation ----------------- */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={Wallet}
            style={{
              width: 330,
              height: 250,
            }}
          />
        </View>

        {/* ----------------------- Vouchers ----------------------- */}

        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
            Explore Vouchers
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Vouchers.map((item, index) => (
              <Card width={200} borderRadius={10} key={index}>
                <View
                  style={{
                    backgroundColor: "#e9c46a",
                    color: "#fff",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image source={coupon} style={{ width: 70, height: 70 }} />
                </View>
                <Button size="sm" type="clear">
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    {item.name} : {item.number}{" "}
                  </Text>
                </Button>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* ----------------------- Schemes ----------------------- */}

        <View style={{ justifyContent: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
            Schemes for you
          </Text>

          {Schemes.map((item, index) => (
            <Card borderRadius={10} key={index}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={coupon} style={{ width: 20, height: 20 }} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                </View>
              </View>

              <Divider marginTop={10} marginBottom={10} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    {item.content}
                  </Text>
                </View>
                <Image source={next} style={{ width: 30, height: 30 }} />
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
