import Coords from "./coord";
import Main from "./main";
import Weather from "./Weather";

export default interface Results {
  coord: Coords;
  weather: Weather;
  main: Main;
  name: string;
  id: string;
}
