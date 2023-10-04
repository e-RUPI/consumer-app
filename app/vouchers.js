import React, { useState } from "react";
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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const dummyData = [
  {
    id: "1",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Some Text Goes Here 1",
  },
  {
    id: "2",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Some Text Goes Here 2",
  },
  {
    id: "3",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Some Text Goes Here 3",
  },
  //   {
  //     id: "4",
  //     imageUrl:
  //       "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
  //     text: "Some Text Goes Here 4",
  //   },
  // Add more data as needed
];

const Voucher = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const numColumns = 2; // Number of columns
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const cardWidth = (screenWidth - 20) / numColumns - 20; // Calculate the card width with spacing

  // If there's an odd number of cards, add an empty item
  if (dummyData.length % numColumns === 1) {
    dummyData.push({ id: "empty", empty: true });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
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
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                }}
              ></Text>
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

        <View style={{ height: 20 }}></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: activeTab === "Active" ? "black" : "white",
              padding: 9,
              borderRadius: 15,
              height: 55,
              width: 100,
            }}
            onPress={() => handleTabPress("Active")}
          >
            <Text
              style={{
                color: activeTab === "Active" ? "white" : "black",
                alignSelf: "center", // Center the text vertically within the Pressable
              }}
            >
              Active
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: activeTab === "Redeemed" ? "black" : "white",
              padding: "9px",
              borderRadius: 15,
              height: 55,
              width: 110,
            }}
            onPress={() => handleTabPress("Redeemed")}
          >
            <Text
              style={{
                color: activeTab === "Redeemed" ? "white" : "black",
                alignSelf: "center", // Center the text vertically within the Pressable
              }}
            >
              Redeemed
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: activeTab === "Expired" ? "black" : "white",
              padding: 9,
              borderRadius: 15,
              height: 55,
              width: 110,
            }}
            onPress={() => handleTabPress("Expired")}
          >
            <Text
              style={{
                color: activeTab === "Expired" ? "white" : "black",
                // alignSelf: "center", // Center the text vertically within the Pressable
              }}
            >
              Expired
            </Text>
          </Pressable>
        </View>

        <View style={{ height: 25 }}></View>

        {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      > */}
        <View
          style={{
            backgroundColor: "gray",
            flexDirection: "row",
            paddingVertical: 10,
            // borderRadius: 15,
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
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: activeTab === "Option1" ? "black" : "white",
                padding: 4,
                borderRadius: 10,
                marginRight: 10,
                flex: 1, // Use flex to take the entire width
              }}
              onPress={() => handleTabPress("Option1")}
            >
              {activeTab === "Option1" ? (
                <Ionicons name="radio-button-on" size={14} color="white" />
              ) : (
                <Ionicons name="radio-button-off" size={14} color="black" />
              )}
              <Text
                style={{
                  color: activeTab === "Option1" ? "white" : "black",
                  marginLeft: 5,
                  fontSize: 10,
                }}
              >
                Agriculture
              </Text>
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: activeTab === "Option2" ? "black" : "white",
                padding: 8,
                borderRadius: 10,
                marginRight: 10,
                flex: 1, // Use flex to take the entire width
              }}
              onPress={() => handleTabPress("Option2")}
            >
              {activeTab === "Option2" ? (
                <Ionicons name="radio-button-on" size={14} color="white" />
              ) : (
                <Ionicons name="radio-button-off" size={14} color="black" />
              )}
              <Text
                style={{
                  color: activeTab === "Option2" ? "white" : "black",
                  marginLeft: 5,
                  fontSize: 10,
                }}
              >
                Travel
              </Text>
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: activeTab === "Option3" ? "black" : "white",
                padding: 8,
                borderRadius: 10,
                marginRight: 10,
                flex: 1, // Use flex to take the entire width
              }}
              onPress={() => handleTabPress("Option3")}
            >
              {activeTab === "Option3" ? (
                <Ionicons name="radio-button-on" size={14} color="white" />
              ) : (
                <Ionicons name="radio-button-off" size={14} color="black" />
              )}
              <Text
                style={{
                  color: activeTab === "Option3" ? "white" : "black",
                  marginLeft: 5,
                  fontSize: 10,
                }}
              >
                Health Care
              </Text>
            </Pressable>

            {/* Add one more option */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: activeTab === "Option4" ? "black" : "white",
                padding: 8,
                borderRadius: 10,
                marginRight: 10,
                flex: 1, // Use flex to take the entire width
              }}
              onPress={() => handleTabPress("Option4")}
            >
              {activeTab === "Option4" ? (
                <Ionicons name="radio-button-on" size={14} color="white" />
              ) : (
                <Ionicons name="radio-button-off" size={14} color="black" />
              )}
              <Text
                style={{
                  color: activeTab === "Option4" ? "white" : "black",
                  marginLeft: 5,
                  fontSize: 10,
                }}
              >
                Education
              </Text>
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: activeTab === "Option5" ? "black" : "white",
                padding: 8,
                borderRadius: 10,

                flex: 1, // Use flex to take the entire width
              }}
              onPress={() => handleTabPress("Option4")}
            >
              {activeTab === "Option5" ? (
                <Ionicons name="radio-button-on" size={14} color="white" />
              ) : (
                <Ionicons name="radio-button-off" size={14} color="black" />
              )}
              <Text
                style={{
                  color: activeTab === "Option5" ? "white" : "black",
                  marginLeft: 5,
                  fontSize: 10,
                }}
              >
                Bank
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View style={{ height: 20 }}></View>
      {/* VOUCHERS */}

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
          // Render an empty view for the added empty item
          if (item.empty) {
            return (
              <View style={[styles.card, { backgroundColor: "transparent" }]} />
            );
          }

          return (
            <Pressable style={styles.card}>
              {/* Image Portion */}
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              {/* Text Portion */}
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default Voucher;
