import * as UI from '../../components/common';

interface Props {
  navigation: { [key: string]: any };
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <UI.Layout>
      <UI.Container>
        <UI.Section bgColor="green">
          <UI.Text isTitle>Components</UI.Text>
          <UI.Text isSubtitle>Text Component One: </UI.Text>
          <UI.Text>Home Screen</UI.Text>
          <UI.Text style={{ fontWeight: 'bold', fontSize: 20 }}>Home Screen</UI.Text>
        </UI.Section>
        <UI.Section bgColor="orangered">
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
