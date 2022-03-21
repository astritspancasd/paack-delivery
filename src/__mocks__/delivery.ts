import { IDelivery } from '../store/types';

export const mockedIdleDelivery = {
  client: 'Fay - Schroeder',
  customer: {
    name: 'Mabel Kemmer V',
    address: '1813 Howe Ridges',
    city: 'Cambridge',
    zipCode: '60929',
    latitude: '-81.9037',
    longitude: '-175.4254',
  },
  delivery: {
    status: 'idle',
    latitude: 42.8539904,
    longitude: 20.9518592,
  },
  id: '34',
};

export const mockedDeliveredDelivery = {
  client: 'Fay - Schroeder',
  customer: {
    name: 'Mabel Kemmer V',
    address: '1813 Howe Ridges',
    city: 'Cambridge',
    zipCode: '60929',
    latitude: '-81.9037',
    longitude: '-175.4254',
  },
  delivery: {
    status: 'delivered',
    latitude: 42.8539904,
    longitude: 20.9518592,
  },
  id: '34',
};

export const mockDeliveryStore = (delivery: IDelivery, active: boolean) => {
  return {
    delivery,
    active,
    loading: false,
    error: null,
  };
};
