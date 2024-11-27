import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Register() {
  const router = useRouter();
  const [useEmail, setUseEmail] = useState(true); // Toggle between email and phone
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Add confirm password field
  const [acceptTnC, setAcceptTnC] = useState(false); // Toggle for terms and conditions
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle for password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Toggle for confirm password visibility

  // Handle button scale animation
  const scaleAnim = new Animated.Value(1);
  const handleButtonPress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Validate the inputs and handle registration
      if (acceptTnC) {
        if (password === confirmPassword) {
          // Registration logic here (e.g., API call to create an account)
          alert("Registration successful!");
          router.replace("/home"); // Navigate to home after successful registration
        } else {
          alert("Passwords do not match.");
        }
      } else {
        alert("Please accept the terms and conditions.");
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <View style={styles.logoBackground}></View>
        <Text style={styles.subtitle}>Create an Account</Text>
        <Text style={styles.welcomeText}>
          Already have an account?{" "}
          <Text
            style={styles.linkText}
            onPress={() => router.push("/auth/login")}
          >
            Sign In
          </Text>
        </Text>
      </View>

      {/* Toggle Tab */}
      <View style={styles.toggleTab}>
        <TouchableOpacity
          style={[styles.toggleTabButton, useEmail && styles.toggleTabButtonActive]}
          onPress={() => setUseEmail(true)}
        >
          <Text style={[styles.toggleTabText, useEmail && styles.toggleTabTextActive]}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleTabButton, !useEmail && styles.toggleTabButtonActive]}
          onPress={() => setUseEmail(false)}
        >
          <Text style={[styles.toggleTabText, !useEmail && styles.toggleTabTextActive]}>
            Phone
          </Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{useEmail ? "Email" : "Phone Number"}</Text>
        <AntDesign
          name={useEmail ? "mail" : "phone"}
          size={20}
          color="#407BFF"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType={useEmail ? "email-address" : "phone-pad"}
          value={credential}
          onChangeText={setCredential}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <Ionicons name="key-outline" size={22} color="#407BFF" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <FontAwesome
            name={passwordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#407BFF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <Ionicons name="key-outline" size={22} color="#407BFF" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder=""
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <FontAwesome
            name={confirmPasswordVisible ? "eye" : "eye-slash"}
            size={20}
            color="#407BFF"
          />
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions */}
      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={[styles.checkbox, acceptTnC && styles.checkboxActive]}
          onPress={() => setAcceptTnC(!acceptTnC)}
        >
          {acceptTnC ? (
            <FontAwesome name="check-square-o" size={24} color="#407BFF" />
          ) : (
            <FontAwesome name="square-o" size={24} color="#ccc" />
          )}
        </TouchableOpacity>
        <Text style={styles.termsText}>
          I accept the{" "}
          <Text style={[styles.linkText, { color: "#407BFF" }]}>Terms & Conditions</Text>
          {" "}and talkify's{" "}
          <Text style={[styles.linkText, { color: "#407BFF" }]}>fair use policy</Text>
        </Text>
      </View>

      {/* Register Button */}
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity style={styles.RegisterButton} onPress={handleButtonPress}>
          <Text style={styles.RegisterButtonText}>Register</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Alternative Sign-ins */}
      <View style={styles.altSignInContainer}>
        <Text style={styles.altSignInText}>or sign up with</Text>
        <View style={styles.altSignInButtons}>
          <TouchableOpacity style={styles.altSignInButton}>
            <AntDesign name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.altSignInButton}>
            <Entypo name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.altSignInButton}>
            <MaterialCommunityIcons name="twitter" size={24} color="#1DA1F2" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  topContainer: {
    width: "100%",
    backgroundColor: "#1557ff",
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  subtitle: { fontSize: 18, fontWeight: "bold", color: "#fff", marginBottom: 5 },
  welcomeText: { fontSize: 14, color: "#fff", marginBottom: 20 },
  linkText: { color: "#fff", textDecorationLine: "underline" },
  toggleTab: { flexDirection: "row", marginBottom: 65 },
  toggleTabButton: { flex: 1, paddingVertical: 10, alignItems: "center" },
  toggleTabButtonActive: { borderBottomWidth: 2, borderBottomColor: "#1557ff" },
  toggleTabText: { fontSize: 14, color: "#888" },
  toggleTabTextActive: { color: "#1557ff", fontWeight: "bold" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    marginBottom: 25,
    position: "relative",
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, color: "#333", borderColor: "#1557ff", borderWidth: 1, borderRadius: 10 },
  inputLabel: {
    position: "absolute",
    left: 10,
    top: -25,
    fontSize: 14,
    color: "#888",
    fontWeight: 500,
  },
  RegisterButton: {
    backgroundColor: "#1557ff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
    width: "90%", // Full width
  },
  RegisterButtonText: { fontSize: 18, color: "#fff", fontWeight: "bold", textAlign: "center" },
  altSignInContainer: { alignItems: "center", marginTop: 20 },
  altSignInText: { fontSize: 14, color: "#888", marginBottom: 10 },
  altSignInButtons: { flexDirection: "row" },
  altSignInButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#F0F4FF",
    borderRadius: 8,
  },
  termsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 40,
    gap: 1,
  },
  termsText: { fontSize: 16, color: "#333" },
  checkbox: {
    marginRight: 10,
  },
  checkboxActive: {
    color: "#1557ff",
  },
  eyeIconContainer: {
    position: "absolute",
    right: 20,
    top: "75%",
    transform: [{ translateY: -12 }],
  },
});

