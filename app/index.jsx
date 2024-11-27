import { useRootNavigationState, Redirect } from 'expo-router';

export default function App() {
  const rootNavigationState = useRootNavigationState();

  // Wait until the root layout is mounted
  if (!rootNavigationState?.key) return null;

  // Redirect to the desired initial route
  return <Redirect href={'/landing/onboarding'} />;
}
