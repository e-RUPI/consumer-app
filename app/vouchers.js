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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const Voucher = () => {
  const [activeTab, setActiveTab] = useState("Active"); 

  const handleTabPress = (tabName) => {
    setActiveTab(tabName); 
  };

  return (
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

      <View style={{ flexDirection: "row", alignItems: "center" ,backgroundColor:"white",borderRadius:15}}>
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor:
              activeTab === "Active" ? "black" : "white", // Set background color based on active tab
            padding: 9,
            borderRadius: 15,
            height: 55,
            width: 80,
          }}
          onPress={() => handleTabPress("Active")} // Call the handleTabPress function when pressed
        >
          <Text style={{ color: activeTab === "Active" ? "white" : "black" }}>
            Active
          </Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor:
              activeTab === "Redeemed" ? "black" : "white", 
            padding: 9,
            borderRadius: 15,
            height: 55,
            width: 110,
          }}
          onPress={() => handleTabPress("Redeemed")} 
        >
          <Text style={{ color: activeTab === "Redeemed" ? "white" : "black" }}>
            Redeemed
          </Text>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor:
              activeTab === "Expired" ? "black" : "white", 
            padding: 9,
            borderRadius: 15,
            height: 55,
            width: 80,
          }}
          onPress={() => handleTabPress("Expired")} 
        >
          <Text style={{ color: activeTab === "Expired" ? "white" : "black" }}>
            Expired
          </Text>
        </Pressable>
      </View>



      

<View style={{ height: 25 }}></View>


<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 10 }}
>
  <View
    style={{
      backgroundColor: "gray",
      flexDirection: "row",
      padding: 10,
      borderRadius: 15,
      height: 55, 
      width: "100%", 
    }}
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
      <Text style={{ color: activeTab === "Option1" ? "white" : "black", marginLeft: 5, fontSize:10 }}>
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
      <Text style={{ color: activeTab === "Option2" ? "white" : "black", marginLeft: 5,fontSize:10 }}>
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
        marginRight:10,
        flex: 1, // Use flex to take the entire width
      }}
      onPress={() => handleTabPress("Option3")}
    >
      
      {activeTab === "Option3" ? (
        <Ionicons name="radio-button-on" size={14} color="white" />
      ) : (
        <Ionicons name="radio-button-off" size={14} color="black" />
      )}
      <Text style={{ color: activeTab === "Option3" ? "white" : "black", marginLeft: 5,fontSize:10 }}>
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
        marginRight:10,
        flex: 1, // Use flex to take the entire width
      }}
      onPress={() => handleTabPress("Option4")}
    >
      
      {activeTab === "Option4" ? (
        <Ionicons name="radio-button-on" size={14} color="white" />
      ) : (
        <Ionicons name="radio-button-off" size={14} color="black" />
      )}
      <Text style={{ color: activeTab === "Option4" ? "white" : "black", marginLeft: 5,fontSize:10  }}>
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
      <Text style={{ color: activeTab === "Option5" ? "white" : "black", marginLeft: 5,fontSize:10  }}>
        Bank
      </Text>
    </Pressable>
  </View>
</ScrollView>

<View style={{ height: 20 }}></View> 


<ScrollView
  vertical
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 10 }}
>
  <View
    style={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center", // Align items in the center of the row
    }}
  >
    {/* First Card */}
    <Pressable
      style={{
        
        padding: 10,
        borderRadius: 10,
        margin: 10,
        height: 200,
        width: "48%", // Set the width to make space for two cards in a row
      }}
    >
      {/* Image Portion */}
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      {/* Text Portion */}
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Some Text Goes Here
        </Text>
      </View>
    </Pressable>

    {/* Second Card */}
    <Pressable
      style={{
        
        padding: 10,
        borderRadius: 10,
        margin: 10,
        height: 200,
        width: "48%", // Set the width to make space for two cards in a row
      }}
    >
      {/* Image Portion */}
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      {/* Text Portion */}
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Some Text Goes Here
        </Text>
      </View>
    </Pressable>

    {/* Add more cards as needed */}
    <Pressable
      style={{
        
        padding: 10,
        borderRadius: 10,
        margin: 10,
        height: 200,
        width: "48%", // Set the width to make space for two cards in a row
      }}
    >
      {/* Image Portion */}
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: "https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?pid=ImgDet&rs=1",
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        />
      </View>

      {/* Text Portion */}
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Some Text Goes Here
        </Text>
      </View>
    </Pressable>

    
  </View>
</ScrollView>







    </View>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  

});
