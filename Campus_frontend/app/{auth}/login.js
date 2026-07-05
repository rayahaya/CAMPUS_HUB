import { SafeAreaView } from "react-native-safe-area-context";
import { View,useState } from "react";    
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import {placeholder,onChangeText,autoCapitalize,autoCorrect,button,buttonText} from "react-native";
import {useRouter} from "expo-router";


//import {useAuth} from "../../context/AutoContext";
import {colors,fonts,spacing} from "../../constants/theme";

export default function LoginScreen() {
    const {login} =useAuth();
    const[name, setName] =useState("");
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");
    const[error, setError] =useState("");
  //THIS IS THE LOGIN SCREEN THAT VERIFIES THE USER'S CREDENTIALS AND LOGS THEM IN IF THEY ARE CORRECT
    function handleLogin() {
        setError("");
        if (!email || !password) {
            setError("Please enter both email and password");
            return;
        }
        if (!email.includes("@")) {
            setError("Please enter a valid email address");
            router.replace("/login");
            return;
           
        }
    }

    

    return(
           <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            {/*branding */}
            <View style={styles.brand}>
                <Text style={styles.appName}>CampusHub</Text>
                <Text style={styles.subtitle}>Your Gateway to Campus Life  </Text>
            </View>
            {/*form */}
            <TextInput
                style={styles.input}
                placeholder="Full Name "
                placeholderTextColor={colors.textLight}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="UniversityEmail "
                placeholderTextColor={colors.textLight} 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={colors.textLight}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={colors.white}
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} 
            onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            

        </KeyboardAvoidingView>
    
     
     
     
     
     
     
     
     </SafeAreaView> 
         )  
const styles = StyleSheet.create({
    safe: {
        flex: 1, 
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        padding: spacing.large,
        justifyContent: "center",
    },
    brand: {
        alignItems: "center",
        marginBottom: spacing.xLarge,
    },
    appName: {
        fontSize: fonts.xLarge,
        fontWeight: "bold",
        color: colors.primary,
    },
    subtitle: {
        fontSize: fonts.medium,  
        color: colors.text,
    },
    input: {
        backgroundColor: colors.white,
        borderRadius: 8,},
        padding: spacing.medium,
        marginBottom: spacing.medium,   
        fontSize: fonts.medium,
        color: colors.text,
    },
); 

}

