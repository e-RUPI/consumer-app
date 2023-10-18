import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TextInput,
  FlatList,
  Dimensions,
  Linking,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import banner from "../assets/images/schemes_banner.svg";
import Wallet from "../assets/images/payment.gif";
import { Card, Divider, Button } from "@rneui/base";
import coupon from "../assets/images/coupon.png";
import next from "../assets/images/next.png";
import { Avatar, Icon } from "@rneui/themed";
import axios from "axios";

// const getSchemesData = async () => {
//   try {
//     const response = await axios.get(`https://erupi.vercel.app/api/schemes`);
//     console.log("Response: ", response.data);
//     setSchemesData(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };

// const SchemesData = await getSchemesData();
// console.log("SchemesData: ", SchemesData);
// const SchemesData = [
//   {
//     name: "Ministry of Health and Family Welfare - Ayushman Bharat Yojana",
//     content: "Explore Health Schemes for you and your family",
//   },
//   {
//     name: "Department of Agriculture & Farmers Welfare",
//     content: "Crop Insurance, Farm Equipment, etc.",
//   },
//   {
//     name: "Ministry of Education",
//     content: "School, College, Coaching, etc.",
//   },
// ];

const Schemes = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [activeFilter, setActiveFilter] = useState(null); // Store the active filter
  const [SchemesData, setSchemesData] = useState([]);

  useEffect(() => {
    const getSchemesData = async () => {
      try {
        const response = await axios.get(
          `https://erupi.vercel.app/api/schemes`
        );
        console.log("Response: ", response.data);
        setSchemesData(response.data);
        // return response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    };
    getSchemesData();
  }, []);


  const mccImageMapping = {
    4225: "https://imgs.search.brave.com/HnzYo6gwiUeB3CmjVYEwdcepUGnmUXQ0fVJ9ldlWWfA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg1LzM1LzIy/LzM2MF9GXzI4NTM1/MjI1OV9hNDZ6Q0JW/MWl0TmNYTFE5QWJZ/bmxjRTdGSUpMNUpO/Vi5qcGc",
    8299: "https://imgs.search.brave.com/uxn2uoLhYKZMhPE2h5z-AZvBRsu_4az6OalxnLdIdZM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE1/MjYyMzIwL3Bob3Rv/L2VsZW1lbnRhcnkt/c2Nob29sLWdpcmwt/YXQtdGhlLWZyb250/LW9mLXRoZS1zY2hv/b2wtYnVzLXF1ZXVl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz01SWxQbk9VSGpE/TjBtS2UzLWdYd0Yt/aDVwY0lmWWpXdjFz/b2wyVzNydzUwPQ",
    8062: "https://imgs.search.brave.com/VyCdsnmf9eJ4xlZGV4lFeK5QhWJFjiBNukX7l6RG984/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc4Lzk4LzU2/LzM2MF9GXzI3ODk4/NTYyOV9Td1lQUzJC/ZmtxWVlHSU5jZzBn/QjNLRzdnUXVSdkFJ/RS5qcGc",
    4722: "https://imgs.search.brave.com/4vEPfTEgriP-yELgiZutLTweR6wMBOCKBrAIEeuXMKk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MTU4NzE3Mi9waG90/by90cmF2ZWwtY29u/Y2VwdC1vbi1ibHVl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1sbG9VZExJelI2/ZEQ3SkUwWVBOT2xZ/bmFIanZjZFMzTmtP/U2UzNXJ2cU09",
    5912: "https://imgs.search.brave.com/rj6LxtVfbGOwbSgcZ7l6mVleuNvaRDljEqe9oWOha3U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzAvMTMwODMw/LTA1MC02RDg4MDYw/Qi9UdW1zLWNhbGNp/dW0tY2FyYm9uYXRl/LWluZ3JlZGllbnQu/anBnP3c9MjAwJmg9/MjAwJmM9Y3JvcA",
  };

  const mccMappings = {
    Agriculture: 4225,
    Pharmaceutical: 5912,
    Travel: 4722,
    Education: 8299,
    "Health Care": 8062,
  };

  const filteredSchemes = SchemesData.filter((scheme) => {
    if (activeFilter && mccMappings[activeFilter]) {
      return scheme.mcc === mccMappings[activeFilter];
    }
    return true; // Show all schemes if no filter is active
  });

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // Reset the active filter when changing Schemes types
    setActiveFilter(null);
  };

  const handleFilterPress = (filterName) => {
    setActiveFilter(filterName);
  };

  const numColumns = 2; // Number of columns
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const cardWidth = (screenWidth - 20) / numColumns - 20; // Calculate the card width with spacing

  // If there's an odd number of cards, add an empty item
  //   if (dummyData.length % numColumns === 1) {
  //     dummyData.push({ id: "empty", empty: true });
  //   }

  const params = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{ backgroundColor: "#fff", flex: 1, paddingBottom: 20 }}
    >
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerLeft: () => (
            <Pressable
              style={{
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 9,
                gap: 12,
              }}
            >
              <Pressable>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      resizeMode: "cover",
                    }}
                    source={{
                      uri: "https://imgs.search.brave.com/3Ek8ZJ3v25qa9CrYaE8DbwG4V78Tp51V2U9nzESHKNc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjk5/OTI5Ny5qcGc",
                    }}
                  />
                </View>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  backgroundColor: "white",
                  padding: 9,
                  borderRadius: 20,
                  height: 42,
                  width: 300,
                }}
              >
                <AntDesign name="search1" size={20} color="black" />
                <TextInput
                  placeholder="Search"
                  placeholderTextColor={"black"}
                  style={{ fontWeight: "500", color: "black" }}
                />
              </Pressable>
            </Pressable>
          ),
        }}
      ></Stack.Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <View style={{ padding: 10, alignItems: "center" }}>
            <Image
              source={require("../assets/images/schemes_banner.png")}
              style={{ width: 280, height: 240 }}
            />
          </View>

          <View
            style={{
              backgroundColor: "gray",
              flexDirection: "row",
              paddingVertical: 10,
              height: 55,
              width: "100%",
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            >
              <Pressable
                style={[
                  styles.filterOption,
                  activeFilter === "Agriculture" && styles.activeFilterOption,
                ]}
                onPress={() => handleFilterPress("Agriculture")}
              >
                <Text
                  style={[
                    styles.filterOptionText,
                    activeFilter === "Agriculture" &&
                      styles.activeFilterOptionText,
                  ]}
                >
                  Agriculture
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.filterOption,
                  activeFilter === "Travel" && styles.activeFilterOption,
                ]}
                onPress={() => handleFilterPress("Travel")}
              >
                <Text
                  style={[
                    styles.filterOptionText,
                    activeFilter === "Travel" && styles.activeFilterOptionText,
                  ]}
                >
                  Travel
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.filterOption,
                  activeFilter === "Health Care" && styles.activeFilterOption,
                ]}
                onPress={() => handleFilterPress("Health Care")}
              >
                <Text
                  style={[
                    styles.filterOptionText,
                    activeFilter === "Health Care" &&
                      styles.activeFilterOptionText,
                  ]}
                >
                  Health Care
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.filterOption,
                  activeFilter === "Education" && styles.activeFilterOption,
                ]}
                onPress={() => handleFilterPress("Education")}
              >
                <Text
                  style={[
                    styles.filterOptionText,
                    activeFilter === "Education" &&
                      styles.activeFilterOptionText,
                  ]}
                >
                  Education
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.filterOption,
                  activeFilter === "Pharmaceutical" &&
                    styles.activeFilterOption,
                ]}
                onPress={() => handleFilterPress("Pharmaceutical")}
              >
                <Text
                  style={[
                    styles.filterOptionText,
                    activeFilter === "Pharmaceutical" &&
                      styles.activeFilterOptionText,
                  ]}
                >
                  Pharmaceutical
                </Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
        <View style={{ height: 20 }}></View>

        <View>
          {filteredSchemes.map((item, index) => (
            <Card
              style={{
                borderRadius: 10,
                padding: 16,
                marginBottom: 16,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              key={index}
            >
              
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: mccImageMapping[item.mcc] }}
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 16,
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    flexShrink: 1, // Allow text to shrink within its container
                  }}
                  numberOfLines={2} // Limit text to one line
                  ellipsizeMode="tail" // Add an ellipsis (...) for overflow
                >
                  {item.title}
                </Text>
              </View>

              <Divider
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    {item.organization}
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    if (item.link) {
                      Linking.openURL(item.link);
                    }
                  }}
                >
                  <Image
                    source={next}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </Pressable>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFF",
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    height: 200,
    aspectRatio: 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
  header: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 9,
    gap: 12,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: "cover",
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "white",
    padding: 9,
    borderRadius: 20,
    height: 42,
    width: 300,
  },
  voucherTabs: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    borderColor: "black",
  },
  voucherTab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
    borderRadius: 15,
    height: 55,
    width: 100,
  },
  activeVoucherTab: {
    backgroundColor: "black",
  },
  voucherTabText: {
    alignSelf: "center",
  },
  activeVoucherTabText: {
    color: "white",
  },

  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "gray",
    height: 55,
    width: "100%",
  },
  filtersScrollView: {
    paddingHorizontal: 10,
  },
  filterOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 4,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
  },
  activeFilterOption: {
    backgroundColor: "black",
  },
  filterOptionText: {
    marginLeft: 5,
    fontSize: 10,
  },
  activeFilterOptionText: {
    color: "white",
  },
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    height: 200,
    aspectRatio: 1,
    // borderColor: "black",
    // borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    padding: 10,
  },
});

export default Schemes;
