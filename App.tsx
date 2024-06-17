import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { ChatClient, ChatOptions } from "react-native-agora-chat";

export default function App() {
  React.useEffect(() => {
    ChatClient.getInstance().init(
      new ChatOptions({
        debugModel: true,
        appKey: "sdf",
      })
    ).then().catch((e) => {
      console.log('test:', e);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app2!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
