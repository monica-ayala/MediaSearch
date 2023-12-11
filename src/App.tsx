// (c) Delta Software 2023, rights reserved.

import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export function App({
  children,
}: {
  children?: React.ReactNode;
}) {
  
  return (
    <React.Suspense fallback={<p></p>}>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
          </div>
        )}
      >
        <RecoilRoot>
        <BrowserRouter>
              {children}
            </BrowserRouter>
        </RecoilRoot>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default App;