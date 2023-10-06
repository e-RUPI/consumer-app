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
import { Stack, useLocalSearchParams } from "expo-router";
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
  const [activeFilter, setActiveFilter] = useState(null); // Store the active filter

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    // Reset the active filter when changing voucher types
    setActiveFilter(null);
  };

  const handleFilterPress = (filterName) => {
    setActiveFilter(filterName);
  };

  const numColumns = 2; // Number of columns
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const cardWidth = (screenWidth - 20) / numColumns - 20; // Calculate the card width with spacing

  // If there's an odd number of cards, add an empty item
  if (dummyData.length % numColumns === 1) {
    dummyData.push({ id: "empty", empty: true });
  }

  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
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
      <View style={{ alignItems: "center" }}>
        <View style={{ height: 20 }}></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 18,
            borderColor: "black",
            borderWidth: 2,
          }}
        >
          <Pressable
            style={[
              styles.voucherTab,

              activeTab === "Active" && styles.activeVoucherTab,
            ]}
            onPress={() => handleTabPress("Active")}
          >
            <Text
              style={[
                styles.voucherTabText,
                activeTab === "Active" && styles.activeVoucherTabText,
              ]}
            >
              Active
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.voucherTab,
              activeTab === "Redeemed" && styles.activeVoucherTab,
            ]}
            onPress={() => handleTabPress("Redeemed")}
          >
            <Text
              style={[
                styles.voucherTabText,
                activeTab === "Redeemed" && styles.activeVoucherTabText,
              ]}
            >
              Redeemed
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.voucherTab,
              activeTab === "Expired" && styles.activeVoucherTab,
            ]}
            onPress={() => handleTabPress("Expired")}
          >
            <Text
              style={[
                styles.voucherTabText,
                activeTab === "Expired" && styles.activeVoucherTabText,
              ]}
            >
              Expired
            </Text>
          </Pressable>
          {/* <Pressable
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
          </Pressable> */}
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
                  activeFilter === "Education" && styles.activeFilterOptionText,
                ]}
              >
                Education
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.filterOption,
                activeFilter === "Banking" && styles.activeFilterOption,
              ]}
              onPress={() => handleFilterPress("Banking")}
            >
              <Text
                style={[
                  styles.filterOptionText,
                  activeFilter === "Banking" && styles.activeFilterOptionText,
                ]}
              >
                Banking
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

export default Voucher;
