import { Component, type ErrorInfo, type ReactNode } from "react"

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

/** Catches unexpected render errors so the site never shows a blank page. */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("Unhandled application error", error, info)
    }
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fcfdfe] px-6">
        <div className="w-full max-w-[480px] text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-sky uppercase">
            Something went wrong
          </p>
          <h1 className="mt-3 text-[28px] leading-[36px] font-bold text-navy">
            This page could not be displayed.
          </h1>
          <p className="mt-3 text-[15px] leading-[26px] text-body">
            Please reload the page. If the problem persists, write to us at{" "}
            <a className="font-semibold text-link hover:underline" href="mailto:contact@qhealthglobal.com">
              contact@qhealthglobal.com
            </a>
            .
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-flex h-[44px] items-center rounded-full bg-brand px-6 text-[14px] font-semibold text-white transition-colors hover:bg-brand-deep"
            >
              Reload
            </button>
            <a
              href="/"
              className="inline-flex h-[44px] items-center rounded-full border border-[#b9cfe0] px-6 text-[14px] font-semibold text-brand transition-colors hover:bg-mist/60"
            >
              Back to home
            </a>
          </div>
        </div>
      </div>
    )
  }
}
