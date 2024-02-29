import * as UI from '../../components/common';

interface Props {
  navigation: { [key: string]: any };
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <UI.Layout>
      <UI.Container height="100%" style={{ flexDirection: 'column' }}>
        <UI.Section style={{ flex: 1 }} bgColor="red">
          <UI.Text isTitle>Components</UI.Text>
          <UI.Text isSubtitle>Text Component One: </UI.Text>
          <UI.Text>Home Screen</UI.Text>
          <UI.Text style={{ fontWeight: 'bold', fontSize: 20 }}>Home Screen</UI.Text>
        </UI.Section>
        <UI.Section style={{ flex: 2 }} bgColor="green">
          <UI.Text isTitle>Components</UI.Text>
          <UI.Text isSubtitle>Text Component Two: </UI.Text>
          <UI.Text>Home Screen</UI.Text>
          <UI.Text style={{ fontWeight: 'bold', fontSize: 20 }}>Home Screen</UI.Text>
        </UI.Section>
      </UI.Container>
    </UI.Layout>
  );
};

export default HomeScreen;
