'use client';

import { useEffect } from 'react';
import ErrorMessage from '@/components/errorMessage';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error Boundary:", error);
  }, [error]);

  return (
    <div>
      <ErrorMessage message={error.message} />
    </div>
  );
}
