// import WeeklyMenuA5 from "./components/WeeklyMenu";
import MushroomIcon from "./components/svg/MushroomIcon";
import FishIcon from "./components/svg/FishIcon";
import WheatIcon from "./components/svg/WheatIcon";
import PotatoIcon from "./components/svg/PotatoIcon";
import CarrotIcon from "./components/svg/CarrotIcon";
import BroccoliIcon from "./components/svg/BroccoliIcon";
import CheeseIcon from "./components/svg/CheeseIcon";
import EggIcon from "./components/svg/EggIcon";
import OnionIcon from "./components/svg/OnionIcon";
import StrawberryIcon from "./components/svg/StrawberryIcon";
import TomatoIcon from "./components/svg/TomatoIcon";
import BananaIcon from "./components/svg/BananaIcon";

function App() {
  return (
    <div
      className="w-full grid items-center justify-center text-7xl gap-2"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(5rem, 1fr))", gridAutoRows: "1fr" }}
    >
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <MushroomIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <CheeseIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <FishIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <WheatIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <PotatoIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <CarrotIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <BroccoliIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <EggIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <OnionIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <StrawberryIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <TomatoIcon variant="color" />
      </div>
      <div className="rounded-xl bg-base flex items-center justify-center aspect-square">
        <BananaIcon variant="color" />
      </div>
    </div>
  );
  // return (
  //   <div className="flex justify-around items-center w-a4y h-a4x">
  //     <WeeklyMenuA5 />
  //     <WeeklyMenuA5 />
  //   </div>
  // );
}

export default App;
