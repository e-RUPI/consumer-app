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
  Modal,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const dummyData = [
  {
    id: "1",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Agriculture",
    title: "Amit Seeds and Tools",
    product: "Fertilizers",
    amount: "1000",
    date: "Valid till 29/09/23",
    footerText: "Agriculture insurance company of India",
  },
  {
    id: "2",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Education",
    title: " Merit Scholarship",
    product: "Scholarship",
    amount: "50000",
    date: "Valid till 19/12/24",
    footerText: " National Merit Scholarship of India",
  },
  {
    id: "3",
    imageUrl:
      "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
    text: "Health Care",
    title: " Health Care Insurance",
    product: "Kidney",
    amount: "150000",
    date: "Valid till 19/12/24",
    footerText: " National Merit Scholarship of India",
  },
];

const Voucher = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState(""); // Store the active filter
  const [vouchersData, setVouchersData] = useState([]);

  useEffect(() => {
    const getVouchersData = async () => {
      try {
        const response = await axios.get(
          `https://erupi.vercel.app/api/vouchers?status=${activeTab}`
        );
        console.log("Vouchers Response: ", response.data);
        setVouchersData(response.data);
        // return response.data;
      } catch (error) {
        console.error("Error fetching Voucher data:", error);
        throw error;
      }
    };
    getVouchersData();
  }, [activeTab]);

  const mccImageMapping = {
    4225: "https://imgs.search.brave.com/HnzYo6gwiUeB3CmjVYEwdcepUGnmUXQ0fVJ9ldlWWfA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzg1LzM1LzIy/LzM2MF9GXzI4NTM1/MjI1OV9hNDZ6Q0JW/MWl0TmNYTFE5QWJZ/bmxjRTdGSUpMNUpO/Vi5qcGc",
    8299: "https://imgs.search.brave.com/uxn2uoLhYKZMhPE2h5z-AZvBRsu_4az6OalxnLdIdZM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTE1/MjYyMzIwL3Bob3Rv/L2VsZW1lbnRhcnkt/c2Nob29sLWdpcmwt/YXQtdGhlLWZyb250/LW9mLXRoZS1zY2hv/b2wtYnVzLXF1ZXVl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz01SWxQbk9VSGpE/TjBtS2UzLWdYd0Yt/aDVwY0lmWWpXdjFz/b2wyVzNydzUwPQ",
    8062: "https://imgs.search.brave.com/VyCdsnmf9eJ4xlZGV4lFeK5QhWJFjiBNukX7l6RG984/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzc4Lzk4LzU2/LzM2MF9GXzI3ODk4/NTYyOV9Td1lQUzJC/ZmtxWVlHSU5jZzBn/QjNLRzdnUXVSdkFJ/RS5qcGc",
    4722: "https://imgs.search.brave.com/4vEPfTEgriP-yELgiZutLTweR6wMBOCKBrAIEeuXMKk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MTU4NzE3Mi9waG90/by90cmF2ZWwtY29u/Y2VwdC1vbi1ibHVl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW1sbG9VZExJelI2/ZEQ3SkUwWVBOT2xZ/bmFIanZjZFMzTmtP/U2UzNXJ2cU09",
    5912: "https://imgs.search.brave.com/rj6LxtVfbGOwbSgcZ7l6mVleuNvaRDljEqe9oWOha3U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMzAvMTMwODMw/LTA1MC02RDg4MDYw/Qi9UdW1zLWNhbGNp/dW0tY2FyYm9uYXRl/LWluZ3JlZGllbnQu/anBnP3c9MjAwJmg9/MjAwJmM9Y3JvcA",
  };

  const mccToHeaderMapping = {
    4225: "AGRICULTURE",
    5912: "PHARMACEUTICAL",
    4722: "TRAVEL",
    8299: "EDUCATION",
    8062: "HEALTH CARE",
  };

  const mccForFilter = {
    Agriculture: 4225,
    Pharmaceutical: 5912,
    Travel: 4722,
    Education: 8299,
    "Health Care": 8062,
  };

  const filteredVouchers = activeFilter
    ? vouchersData.filter(
        (voucher) => voucher.mcc === mccForFilter[activeFilter]
      )
    : vouchersData;

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
  if (filteredVouchers.length % numColumns === 1) {
    // Generate a unique key for the empty item
    const emptyKey = "empty_" + Math.random().toString(36).substring(7);

    // Push the empty item with the generated key
    filteredVouchers.push({ id: emptyKey, empty: true });
  }

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedItem(null);
  };

  const getDaysRemaining = (expiryDate) => {
    if (!expiryDate) {
      return null;
    }

    // Convert the expiry date string to a Date object
    const expiry = new Date(expiryDate);

    // Get the current date
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = expiry - currentDate;

    // Calculate the remaining days
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
  };

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
                  style={{ fontWeight: "500", color: "white" }}
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
                activeFilter === "Pharmaceutical" && styles.activeFilterOption,
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
      {/* VOUCHERS */}

      <FlatList
        data={filteredVouchers}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => {
          // Render an empty view for the added empty item
          if (item.empty) {
            return (
              <View style={[styles.card, { backgroundColor: "transparent" }]} />
            );
          }

          // Determine the image URL based on the MCC code
          const mccCode = item.mcc; // Assuming "mcc" is the property in your data
          const imageUrl = mccImageMapping[mccCode];

          return (
            <Pressable style={styles.card} onPress={() => openModal(item)}>
              {/* Image Portion */}
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: imageUrl }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

              {/* Text Portion */}
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.purpose}</Text>
              </View>
            </Pressable>
          );
        }}
      />

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={
              activeTab === "Expired"
                ? ["#000000", "white"]
                : activeFilter === "Agriculture"
                ? ["#10C71C", "white"]
                : activeFilter === "Travel"
                ? ["#39E4F4", "white"]
                : activeFilter === "Health Care"
                ? ["#F02B24", "white"]
                : activeFilter === "Education"
                ? ["#B842F4", "white"]
                : ["#FAF462", "white"]
            } //default
            style={styles.modalContent}
          >
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <AntDesign
                name="closecircleo"
                size={24}
                color={activeTab === "Expired" ? "red" : "black"}
              />
            </TouchableOpacity>

            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                {mccToHeaderMapping[selectedItem?.mcc] || "Unknown"}{" "}
                {/* "Unknown" will be shown if there's no mapping */}
              </Text>
            </View>

            {/* QR Code */}
            <View style={styles.qrCodeContainer}>
              {/* You can place your QR code component here */}
              {/* Example: <Image source={qrCodeImage} style={styles.qrCode} /> */}
              <Image
                source={{
                  uri: "https://imgs.search.brave.com/tRpS-KeocWolddcsJM6nQKGT1akkCXOvxtg25TYK8FE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/ODE1MjIwMy9waG90/by9kYXRhLWxhYmVs/aW5nLXF1aWNrLXJl/c3BvbnNlLWNvZGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9DeWhSYU9oYUpH/ZVJXeFJIblBvWm9Z/RVhkYzBaVGpaZk1U/aTRpMEJoN2c9",
                }}
                style={styles.qrCode}
              />
            </View>

            {/* Title */}
            <Text style={styles.titleText}>
              {/* {selectedItem?.purpose || "Title Not Available"} */}
            </Text>

            {/* Additional Text */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 5,
              }}
            >
              {selectedItem?.status || "Product Not Available"}
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 5,
              }}
            >
              ₹{selectedItem?.maxAmount || "Amount Not Available"}
            </Text>
            <Text
              style={{
                fontSize: activeTab === "Expired" ? 25 : 15,
                // fontWeight: "bold",
                textAlign: activeTab === "Redeemed" ? "left" : "center",
                marginBottom: 5,
                color:
                  activeTab === "Expired"
                    ? "red"
                    : activeTab === "Redeemed"
                    ? "red"
                    : "black",
              }}
            >
              {activeTab === "Expired"
                ? "Expired"
                : activeTab === "Redeemed"
                ? "Transacton id: 1234567"
                : `Valid till -  ${
                    selectedItem?.expiry.replace(
                      /^(\d{4}-\d{2}-\d{2}).*$/,
                      "$1"
                    ) || "Title Not Available"
                  }`}
            </Text>

            {/* Footer Text */}
            <Text
              style={[
                styles.footerText,
                activeTab === "Redeemed" && { color: "black" },
              ]}
            >
              {activeTab === "Expired"
                ? ""
                : activeTab === "Redeemed"
                ? `Issued on ${
                    new Date(selectedItem?.issueDate).toLocaleDateString() ||
                    "Issue Date Not Available"
                  }`
                : `Expires in ${
                    getDaysRemaining(selectedItem?.expiry) ||
                    "Title Not Available"
                  } days`}
            </Text>
          </LinearGradient>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    paddingVertical: 20,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 24,
    alignItems: "center",

    // width: "100%"
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  modalText: {
    fontSize: 18,
    paddingHorizontal: 20,
    marginVertical: 16,
  },
  modalHeader: {
    backgroundColor: "grey",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 40,
  },

  modalHeaderText: {
    color: "white",
    // width:300,
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
    backgroundColor: "grey",
  },
  qrCodeContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 0,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  additionalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  footerText: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    color: "red",
    // marginBottom: 10,
  },
  qrCode: {
    // Style the QR code image here
    width: 250, // Set the width and height as needed
    height: 250,
    // Add any additional styles you require for the QR code
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1, // To ensure the button appears above other content
    padding: 10,
  },
});

export default Voucher;
