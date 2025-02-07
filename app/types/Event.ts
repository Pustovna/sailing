export interface Contact {
  name: string;
  telegram?: string;
  email: string;
  whatsapp?: string;
}

export interface Place {
    offline: boolean;
    address?: string;
    link?: string;
}

export interface EventMetadata {
    description: string;
    keywords: string[];
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
    comunity: string[];
    eventTypes: string[];
    meta: EventMetadata;
    images?: string[];
  };
}
