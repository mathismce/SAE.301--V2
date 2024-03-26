import Button from "./Button";
import ButtonSquare from "./ButtonSquare";
import SearchBar from "./SearchBar";

import {FavIcon, LiveIcon} from "../libs/Icons";
import {PlayIcon} from "../libs/Icons";


export default function App() {
  return (
    <div className="flex flex-col gap-4 p-6 bg-black">
      <Button intent={"primary"}>
      Watching TV
        <LiveIcon className={"w-10 h-fit"} />
      </Button>
      <Button intent={"primary"} size={"small"} >
      Upgrade to premium
      </Button>
      <Button  intent={"primary"} size={"film"} >
        <PlayIcon className={"w-3"} />Watch now
      </Button>
      <Button intent={"secondary"} size={"film"} >
      <FavIcon className={"w-4 h-fit"} />Favorites
      </Button>
      <ButtonSquare intent={"square"} className={"group"} >
      </ButtonSquare>
      <SearchBar></SearchBar>
      
    </div>
  );
}
