import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppInput from '../src/components/AppInput';

export default function Login() {
    return

    <View>
        <Text>Meu Bolso</Text>
        <Text>Controle seus finanças.</Text>

        <AppInput label="E-mail" placeholder="Digite seu e-mail"
        autoCapitalize="none" keyboardType="email-address"/>
       
        <AppInput label="Senha" secureTextEntry
        placeholder="Digite sua senha"/>

    </View>
}

const styles = StyleSheet.create({

});