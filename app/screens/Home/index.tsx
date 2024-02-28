import * as UI from "../../components/common";

interface Props {
  navigation: { [key: string]: any };
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <UI.Layout>
      <UI.Text isTitle>Components</UI.Text>
      <UI.Text isSubtitle>Text Component: </UI.Text>
      <UI.Text>Home Screen</UI.Text>
      <UI.Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Home Screen
      </UI.Text>
    </UI.Layout>
  );
};

export default HomeScreen;
