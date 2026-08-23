import {Text, TextInput, View, StyleSheet} from 'react-native';

export default function AppInput({ label, error, ...props}) {
    return (
        <View>
            {label && <Text>{label}</Text>}
            <TextInput />
            {error && <Text>{error}</Text>}
        </View>
    );
}