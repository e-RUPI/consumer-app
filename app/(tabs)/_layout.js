import { Tabs } from "expo-router/tabs";
import Stack from "expo-router/stack";
export default function AppLayout() {
  return (
    <Tabs>
      {/* <Stack
        screenOptions={{
          // headerShown: false,
          headerStyle: {
            backgroundColor: "#3289ed",
          },
          headerTintColor: "#f073d1",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      /> */}
      <Tabs.Screen
        // Name of the route to hide.
        name="home1"
        options={{
          headerShown: true,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="about"
        options={
          {
            // This tab will no longer show up in the tab bar.
            //   href: null,
          }
        }
      />
    </Tabs>
  );
}
