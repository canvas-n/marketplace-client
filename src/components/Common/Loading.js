import { useIsFetching } from "@tanstack/react-query";
import { useIsMutating } from "@tanstack/react-query";
import { RotatingSquare } from  'react-loader-spinner'


const Loading = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return isFetching || isMutating ?
      <RotatingSquare
        ariaLabel="rotating-square"
        visible={true}
        color="black"
        strokeWidth="10"
      /> : null;
};

export default Loading;
