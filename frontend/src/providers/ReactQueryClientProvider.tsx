import React, { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
} from '@tanstack/react-query';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isAxiosError } from 'api/axios';

interface Props {
  children: React.ReactNode;
}

const ReactQueryClientProvider: React.FC<Props> = ({ children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: ready,
        retry: false,
      },
    },

    queryCache: new QueryCache({
      onError: (error) => {
        if (isAxiosError(error)) {
          if (error.response?.status === 401) {
            Swal.fire({
              icon: 'error',
              title: 'Tidak punya akses',
              text: 'Anda tidak memiliki akses untuk mengakses halaman tersebut. Silahkan masuk terlebih dahulu.',
            });
          }
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

ReactQueryClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReactQueryClientProvider;
