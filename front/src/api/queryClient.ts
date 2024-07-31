import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
  //기본적으로 3번 요청한다.
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default queryClient;
