import { Suspense } from 'react';

export const CommonError = ({
  title = 'Error',
  description = 'Something went wrong',
}: {
  title?: string;
  description?: string;
}) => (
  <Suspense fallback="">
    <div data-testid="CommonError">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </Suspense>
);
