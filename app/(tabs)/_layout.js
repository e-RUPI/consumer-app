import { Tabs } from "expo-router/tabs";
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="home1"
        options={
          {
            // This tab will no longer show up in the tab bar.
            //   href: null,
          }
        }
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
