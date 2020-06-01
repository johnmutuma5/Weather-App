import {parseArrayForLocation} from "../src/helpers";
import {Location} from "../src/models/location";

describe('parsing for locations from raw input', () => {
  
  it('should parse the locations to include both name and postal code', () => {
    const places = ['New York', '10001', 'Nairobi', '00100'];
    const locations:Array<Location> =  parseArrayForLocation(places);

    const expectedLocations: Array<Location> = [
      {
        name: 'New York',
        postalCode: '10001'
      },
      {
        name: 'Nairobi',
        postalCode: '00100'
      }
    ];
    expect(locations).toEqual(expectedLocations);
  });

});
