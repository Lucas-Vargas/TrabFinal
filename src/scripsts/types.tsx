import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  CadastroUsuario: undefined;
  CadastroNota: undefined;
  CadastrarProd: undefined;
  CadastrarProps: undefined;
  homeTrue: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type homeTrueProps = NativeStackScreenProps<RootStackParamList, 'homeTrue'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuario'>;

type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

type CadastrarProdProps = NativeStackScreenProps<RootStackParamList, 'CadastrarProd'>;

type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'CadastrarProps'>;


export type { RootStackParamList, HomeProps, LoginProps, CadastroUsuarioProps, CadastroNotaProps, CadastrarProdProps };