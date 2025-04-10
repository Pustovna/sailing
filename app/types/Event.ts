export interface Contact {
  id: string;
  name: string;
  telegram?: string;
  email: string;
  whatsapp?: string;
}

export interface Place {
    offline: boolean;
    address?: string;
    coordinates: number[];
    link?: string;
}

export interface EventMetadata {
    description: string;
    keywords: string[];
}

export interface Community { 
  name: string;
  id: string;
}

export interface EventTypes { 
  name: string;
  id: string;
}

export default interface Event {
  title: string;
  info: {
    date: string;
    place: Place;
    contact?: Contact[];
    shortDescription?: string;
    fullDescription?: string;
    price?: string;
    unicLink?: string;
    author: string;
    comunity: Community[];
    eventTypes: string[];
    meta: EventMetadata;
    images?: string[];
    eventUID: string;
  };
}
