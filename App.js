import CameraScreen from './component/camera'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BrowseScreen from './component/browse';
import RoomScreen from './component/room'

const MainNavigator = createStackNavigator({
  Home: {screen: BrowseScreen},
  Room: {screen: RoomScreen},
  Camera: {screen: CameraScreen},

});

const App = createAppContainer(MainNavigator);

export default App;