import { useRouteError, ErrorResponse } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse

  return (
    <div
      id="error-page"
      className="flex h-screen w-screen flex-col items-center justify-center"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  )
}
