import WeeklyMenuA5 from "./components/WeeklyMenu";
// import { ReactComponent as Mushroom } from "./assets/svg/mushroom.svg";
// import { ReactComponent as Cheese } from "./assets/svg/cheese.svg";
// import { ReactComponent as Fish } from "./assets/svg/fish.svg";
// import { ReactComponent as Wheat } from "./assets/svg/wheat.svg";
// import { ReactComponent as Potato } from "./assets/svg/potato.svg";

function App() {
  // return (
  //   <div className="w-screen h-screen flex items-center justify-center">
  //     <div className="bg-gray-200 text-8xl">
  //       <Mushroom />
  //       <Cheese />
  //       <Fish />
  //       <Wheat />
  //       <Potato />
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex justify-around items-center w-a4y h-a4x">
      <WeeklyMenuA5 />
      <WeeklyMenuA5 />
    </div>
  );
}

export default App;
