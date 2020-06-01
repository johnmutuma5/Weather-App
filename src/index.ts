import {parseArrayForLocation} from "./helpers";
import {Location} from "./models/location";

const places: Array<string> = process.argv.slice(2);

const locations: Array<Location> = parseArrayForLocation(places);

console.log(locations);
