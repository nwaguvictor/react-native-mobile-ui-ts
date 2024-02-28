import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

interface Props {
  route: { [key: string]: any };
}

const ProfileScreen = ({ route }: Props) => {
  const { userId } = route.params;
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity style={{ padding: 10, backgroundColor: "red" }}>
        <Text>User ID: {userId}</Text>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
