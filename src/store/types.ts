export interface IDeliveryDetails {
  status: string;
  latitude?: number | null;
  longitude?: number | null;
}

export interface ICustomer {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  latitude: number;
  longitude: number;
}

export interface IDelivery {
  client: string;
  customer: ICustomer;
  delivery: IDeliveryDetails;
  id: string;
}

export interface IReducer {
  loading: boolean;
  error: string | null;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface IDeliveryReducer extends IReducer {
    delivery: IDelivery | null;
    active: boolean;
  }

  
export interface IDeliveriesReducer extends IReducer {
    deliveries: IDelivery[];
  }
  