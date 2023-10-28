import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import telaLogin from "../layouts/telaLogin";
import TelaCadastro from "../layouts/cadastro";
import homeTrue from "../layouts/homeTrue";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={telaLogin} />
            <Stack.Screen name="CadastroUsuario" component={TelaCadastro} />
            <Stack.Screen name="homeTrue" component={homeTrue} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;