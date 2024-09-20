import BackgroundWrapper from "./BackgroundWrapper";
import { A5VerticalPage } from "./Page";
import { ReactComponent as Mushroom } from "../assets/svg/mushroom.svg";
import { ReactComponent as Wheat } from "../assets/svg/wheat.svg";
import { ReactComponent as Fish } from "../assets/svg/fish.svg";
import { ReactComponent as Potato } from "../assets/svg/potato.svg";
import { ReactComponent as Cheese } from "../assets/svg/cheese.svg";

const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

export default function WeeklyMenuA5() {
  return (
    <A5VerticalPage>
      <div className="relative h-full w-full">
        <div className="h-full w-full grid grid-cols-2 grid-rows-7 pt-[8%]">
          {days.map((day) => {
            return (
              <div key={day} className="relative col-start-1 col-span-1 border-mantle border-b">
                <div className="flex px-[1mm] pt-[2mm] pb-[1mm]">
                  <h2 className="text-2xl text-text">{day}</h2>
                  <span className="h-[9mm] border-b border-b-text" style={{ flex: "1 1 100%" }} />
                </div>
              </div>
            );
          })}
          <div className="col-start-2 col-span-1 row-start-1 row-span-7 pl-6 pr-[10%]">
            <h2 className="text-2xl text-text">Handleliste</h2>
            <div className="flex flex-wrap">
              {new Array(19).fill("").map(() => {
                return (
                  <div
                    className="flex items-center h-[9mm] border-b border-b-text"
                    style={{ flex: "1 0 100%" }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <BackgroundWrapper>
          <Mushroom className="text-mantle text-6xl" />
          <Wheat className="text-mantle text-6xl" />
          <Fish className="text-mantle text-6xl" />
          <Potato className="text-mantle text-6xl" />
          <div className="absolute bottom-0 right-0 flex flex-col">
            <Potato className="text-mantle text-6xl" />
            <Mushroom className="text-mantle text-6xl" />
            <Cheese className="text-mantle text-6xl" />
            <Wheat className="text-mantle text-6xl" />
            <Fish className="text-mantle text-6xl" />
          </div>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <svg viewBox="0 0 210 297">
            <path
              className="fill-mantle"
              d={`
              M 109, 2
              h 75
              v 7
              h 5
              a 10,10 0 1 1 12,12
              v 5
              h 7
              v 75
              l -5 -5
              v -65
              h -7
              v -10
              a 10,10 0 0 1 -7,-7
              h -10
              v -7
              h -65
              Z
            `}
            />
            <circle className="fill-white" cx={198.75} cy={11.25} r={8.5} />
          </svg>
        </BackgroundWrapper>
      </div>
    </A5VerticalPage>
  );
}
