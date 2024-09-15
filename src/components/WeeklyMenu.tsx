import BackgroundWrapper from "./BackgroundWrapper";
import { A5VerticalPage } from "./Page";
import Heart from "./svg/Heart";

const days = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"];

export default function WeeklyMenuA5() {
  return (
    <A5VerticalPage>
      <div className="relative h-full w-full">
        <div className="h-full w-full grid grid-cols-2 grid-rows-7 pt-[8%]">
          {days.map((day) => {
            return (
              <div key={day} className="relative col-start-1 col-span-1">
              {/*<BackgroundWrapper>
                  <svg viewBox="0 0 100 41">
                    <path
                      className="fill-gray-200"
                      d={`
                      M 0,5
                      l 2.5 -2.5
                      h 42.5
                      a 7,7 0 0 1 10 0
                      h 42.5
                      l 2.5 2.5
                      h -1.4
                      l -1.5 -1.5
                      h -42.8
                      a 6,6 0 0 0 -8.6 0
                      h -42.8
                      l -1.5 1.5
                      Z
                  `}
                    />
                  </svg>
                </BackgroundWrapper>*/}
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
          <svg viewBox="0 0 210 297">
            <path
              className="fill-gray-200"
              d={`
              M 109, 8
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
            <Heart
              className="fill-gray-400 stroke-gray-500"
              strokeWidth={1.5}
              transform="translate(197.5, 9.5) scale(0.3) rotate(45)"
            />
            <circle className="fill-white" cx={198.75} cy={17.25} r={8.5} />
          </svg>
        </BackgroundWrapper>
      </div>
    </A5VerticalPage>
  );
}
