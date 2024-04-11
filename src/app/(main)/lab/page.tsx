import { FC } from "react";
import { FaHouse } from "react-icons/fa6";

interface LabPageProps {}

const LabPage: FC<LabPageProps> = ({}) => {
  return (
    <div id="my-container">
      <div className="h-10 w-40 bg-bg-1"></div>
      <div className="h-10 w-40 bg-bg-2"></div>
      <div className="h-10 w-40 bg-bg-3"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      {/* <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div> */}
      <FaHouse className="text-main" />
      <div className="text-text-1 font-semibold text-[1.25rem]">
        Hello World
      </div>
      <div className="text-text-2 font-semibold text-[20px]">Hello World</div>
    </div>
  );
};

export default LabPage;
