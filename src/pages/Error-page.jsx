import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center " >
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="bg-gray-900 p-4 font-bold text-white rounded-md mt-4 " to={'/'} >
        Go back!
      </Link>
    </div>
  );
}