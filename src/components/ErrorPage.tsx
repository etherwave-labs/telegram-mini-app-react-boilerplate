import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
}
