import React, { lazy, Suspense } from 'react';

const LazyMediaViewport = lazy(() => import('./MediaViewport'));

const MediaViewport = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMediaViewport {...props} />
  </Suspense>
);

export default MediaViewport;
