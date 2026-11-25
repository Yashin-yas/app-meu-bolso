// "Stack" = navegação em pilha: cada tela nova é colocada em cima da anterior
// (igual a uma pilha de pratos). O botão "voltar" tira a tela de cima.
import { Stack } from 'expo-router';
 
// AuthProvider é o nosso "provedor de login" (veja src/context/AuthContext.js).
// Ele guarda quem está logado e compartilha essa informação com todas as telas.
import { AuthProvider } from './src/context/AuthContext';
 
// "export default" = esta é a função principal do arquivo.
// O Expo Router a executa automaticamente ao abrir o app.
export default function RootLayout(){
  // O AuthProvider fica POR FORA de tudo: assim, qualquer tela lá dentro
  // consegue perguntar "tem alguém logado?" usando o hook useAuth().
  return <AuthProvider>
        <Stack>
            <Stack.Screen name="index" options={{headerShown:false}} />
            <Stack.Screen name="register" options={{title:'Criar Conta'}} />
            <Stack.Screen name="(app)" options={{headerShown:false}} />
        </Stack>
    </AuthProvider>;
}