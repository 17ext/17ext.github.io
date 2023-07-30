import { FC } from "react";
import { MagnifyingGlass, ThreeDots } from "react-loader-spinner";

export const Loading: FC<{ width: string; height: string }> = ({
  height = "full",
  width = "full",
}): JSX.Element => {
  return (
    <div className={`flex justify-center w-${width} h-${height}`}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      {/* <MagnifyingGlass
        visible={true}
        height="80px"
        width="80px"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#b1102b"
      /> */}
    </div>
  );
};
