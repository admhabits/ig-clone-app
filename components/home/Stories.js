import React from "react";
import { StyleSheet, Text, View, Image, ScrollView , TouchableOpacity} from "react-native";
import USERS from "../../data/Users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {USERS &&
          USERS.map((story, index) => (
            <View key={index} style={styles.storyWrapper}>
              <TouchableOpacity>
                <Image style={styles.story} source={story.image} />
                <Text style={styles.storyText}>
                  {story.user.length > 10
                    ? story.user.slice(0, 10).toLowerCase() + "..."
                    : story.user}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
      <Text style={styles.storyText}>STORIES</Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  storyWrapper: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  story: {
    height: 70,
    width: 70,
    marginLeft: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
   
  },
  storyText: {
    marginLeft: 10,
    color: "white",
    marginVertical: 5,
  },
});
