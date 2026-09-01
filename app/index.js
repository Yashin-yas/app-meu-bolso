import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import AppInput from '../src/components/AppInput';
import AppButton from '../src/components/AppButton';
import { KeyboardAvoidingView } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    return
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding':undefined}>
    <View>
        <Text>Meu Bolso</Text>
        <Text>Controle seus finanças.</Text>

        <AppInput label="E-mail" placeholder="Digite seu e-mail"
        autoCapitalize="none" keyboardType="email-address"/>
       
        <AppInput label="Senha" secureTextEntry
        placeholder="Digite sua senha"/>

        <AppButton title="Entrar" /> 

    </View>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({

});