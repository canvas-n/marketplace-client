import { QueryClient, QueryCache } from "@tanstack/react-query";

function queryErrorHandler(error) {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title =
    error instanceof Error ? error.message : "error connecting to server";

  ///////////////////////////////
  // NOTE: no toast.closeAll() //
  ///////////////////////////////

  // 에러 팝업
  //toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: 2,
    },
  },
});
