import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./card";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CorouselPage = () => {
  return (
    <div className="h-auto flex w-[1100px] mt-16 mb-16 mx-auto">
      <Carousel breakPoints={breakPoints}>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
        <Card className="rounded-2xl">
          <div>
            <img
              className="h-[370px] w-[224px] pt-2"
              src="./maths.png"
              alt=""
            />
            <h1 className="flex justify-center items-center pb-2">
              Mathematics
            </h1>
          </div>
        </Card>
      </Carousel>
    </div>
  );
};

export default CorouselPage;
