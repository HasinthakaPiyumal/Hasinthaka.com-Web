"use client"

import posthog from "posthog-js"
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react"
import { Suspense, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function SuspendedPostHogPageView() {
  const posthogClient = usePostHog()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Trigger a pageview on route or query change
    // posthogClient.()
  }, [pathname, searchParams.toString()])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init('phc_A5kcMXBYlUbVZIFMG3tthbDBcyqXVEHrOMrhxd8MikR', {
      api_host: "https://app.posthog.com",
      ui_host: "https://us.posthog.com",
      capture_pageview: true,
      capture_pageleave: true,
      capture_exceptions: true,
      session_recording: {
        maskAllInputs: true,
        blockClass: 'ph-no-capture',
      },
      debug: process.env.NODE_ENV === "development",
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={<div>Loading...</div>}>
        <SuspendedPostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  )
}