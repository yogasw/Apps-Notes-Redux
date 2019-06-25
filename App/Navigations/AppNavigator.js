import {DrawerNavigator,createStackNavigator,createAppContainer} from "react-navigation";
import Home from '../Screens/Home';
const routes = createStackNavigator({
        home: {
            screen: Home,
            navigationOptions:{
                header :null
            }
        },
    },
);

export default createAppContainer(routes);