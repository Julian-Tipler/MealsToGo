import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "green",
            padding: 16,
          }}
        >
          <Text>search</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "red",
            padding: 16,
          }}
        >
          <Text>main</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
