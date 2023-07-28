import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
const logImg = require("./assets/adaptive-icon.png");

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
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
      <ScrollView>
        <Image
          source={{ uri: "https://picsum.photos/400" }}
          style={{ width: 300, height: 300 }}
        />
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
