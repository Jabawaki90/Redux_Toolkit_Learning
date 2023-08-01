import React, { useState } from "react";
import Greet from "./components/Greet";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const logImg = require("./assets/adaptive-icon.png");

const App = () => {
  const [modal, setModal] = useState(false);
  const [statusBar, setStatusBar] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="Johny Sin" />
      <Greet name="Adam Sandler" />
      <Button
        title="Alert Button"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB is incorrect", [
            { text: "cancel", onPress: () => console.log("cancel") },
            { text: "ok", onPress: () => console.log("ok") },
          ])
        }
      />
      <ActivityIndicator color={"black"} size={"large"} animating={true} />
      <StatusBar
        backgroundColor={"green"}
        barStyle="light-content"
        hidden={statusBar}
      />
      <Button
        title="toggle statusbar"
        onPress={() => {
          setStatusBar(!statusBar);
        }}
      />
      {/* <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
        ></View>
        <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
        ></View>
        <View style={{ width: 200, height: 200, backgroundColor: "red" }}></View>
        <Text>
        <Text style={{ color: "white" }}>Hello</Text> world
      </Text> */}
      <Button
        title="press"
        onPress={() => alert("button pressed")}
        color={"midnightblue"}
        disabled
      />
      <Modal
        visible={modal}
        onRequestClose={() => setModal(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setModal(false)}
          />
        </View>
      </Modal>
      <ScrollView>
        <Pressable onPress={() => setModal(true)}>
          <Image
            source={{ uri: "https://picsum.photos/400" }}
            style={{ width: 300, height: 300 }}
          />
        </Pressable>

        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/400" }}
          style={{ width: 300, height: 300 }}
        />
      </ScrollView>
      {/* <ImageBackground source={logImg} style={{ flex: 1 }}>
        <Text style={{ flex: 1 }}>Image Text</Text>
      </ImageBackground> */}
    </View>
  );
};

export default App;
