import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="home" // This points to home/index.jsx
        options={{
          title: "Messages",
        }}
      />
      <Tabs.Screen
        name="explore" // This points to home/explore.jsx
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="create" // This points to home/create.jsx (Floating Action Button)
        options={{
          title: "Create",
          tabBarIcon: () => <MaterialCommunityIcons name="plus-circle" size={30} color="#407BFF" />
        }}
      />
      <Tabs.Screen
        name="profile" // This points to home/profile.jsx
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;
