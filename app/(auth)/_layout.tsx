import { Stack } from "expo-router";

export default function AuthRoutesLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Scopes",
        headerShown: false,
        animation: "fade",
      }}
    />
  );
}
