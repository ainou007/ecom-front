// import { useEffect } from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  let status: number = 404;
  let statusText: string = 'Page Not Found';

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
  }

  return (
    <div className='container'>
      <h1> {status} </h1>
      <p> {statusText} </p>
      <Link to={'/'} replace>
        Go Home
      </Link>
    </div>
  );
};
export default Error;
