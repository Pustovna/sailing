export interface IRanges {
    startDate: Date | string;
    endDate: Date | string;
  }

export  interface Filters {
    query: string;
    type: string | string[];
    community: string | string[];
    date: IRanges;
  }