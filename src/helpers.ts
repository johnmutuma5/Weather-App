import {Location} from './models/location';

export const parseArrayForLocation = (placeValues: Array<string> ): Array<Location> => {
  const placesWithPostalCode: Array<Location> = [];

  placeValues.forEach((placeValue: string) => {
    const isPostalCode: boolean = new RegExp(/[0-9]+/).test(placeValue);

    if(!isPostalCode) {
      placesWithPostalCode.push({
        name: placeValue
      });
    } else {
      const lastPlaceIndex: number = placesWithPostalCode.length - 1;
      if(lastPlaceIndex >= 0) {
        placesWithPostalCode[lastPlaceIndex] = {
          name: placesWithPostalCode[lastPlaceIndex].name,
          postalCode: placeValue
        };
      }
    }
  });
  return placesWithPostalCode;
}
