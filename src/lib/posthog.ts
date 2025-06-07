import { PostHog } from "posthog-node";

export default function PostHogClient() {
  const posthogClient = new PostHog(
    "phc_A5kcMXBYlUbVZIFMG3tthbDBcyqXVEHrOMrhxd8MikR",
    {
      host: "https://us.i.posthog.com",
      // capture_pageview: 'history_change',
      flushAt: 1,
      flushInterval: 0,
    }
  );

  return posthogClient;
}
