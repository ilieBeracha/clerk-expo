import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomePage() {
  const { user } = useUser();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SignedIn>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Scopes</Text>
          <Text style={styles.email}>
            Hello {user?.emailAddresses[0]?.emailAddress}
          </Text>
          <SignOutButton />
        </View>
      </SignedIn>
      <SignedOut>
        <View style={styles.content}>
          <Text style={styles.title}>You are signed out</Text>
          <Link href="/(auth)">
            <Text style={styles.link}>Sign in</Text>
          </Link>
        </View>
      </SignedOut>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
  link: {
    fontSize: 16,
    color: "#000",
    textDecorationLine: "underline",
  },
});
