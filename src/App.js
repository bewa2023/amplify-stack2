import logo from './logo.svg';
import "@aws-amplify-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signout }) {
  return (
    
    <View className="App">
      <Card>
      <Image src={logo} className="App-logo" alt="logo" />
      <Heading level={1}>We now have Auth!</Heading>
    </Card>
    <Button onClick={signout}>Sign Out</Button>
  </View>

  );
}

export default withAuthenticator(App);

