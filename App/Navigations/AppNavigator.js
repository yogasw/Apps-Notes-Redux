import {createDrawerNavigator, createAppContainer} from "react-navigation";
import Home from '../Screens/Home';
import Note from '../Screens/AddNote';
import AddNote from "../Screens/AddNote";
import EditNote from "../Screens/EditNote";
import SideMenu from '../Components/SideMenu';

const AppNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    Note: {
        screen: Note,
    },
    AddNote: {
        screen: AddNote,
    },
    EditNote: {
        screen: EditNote,
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: 200
});

const appContainer = createAppContainer(AppNavigator);
export default appContainer;