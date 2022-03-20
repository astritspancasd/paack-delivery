import { ILocation } from "../store/types";

export const getCurrentLocation = async (): Promise<ILocation> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      () => {
        reject();
      }
    );
  });
};
