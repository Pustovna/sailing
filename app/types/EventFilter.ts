export interface IRanges {
  startDate: Date | string;
  endDate: Date | string;
}

export interface Filters {
  query: string;
  type: string | string[];
  community: string | string[];
  date: IRanges;
}

export interface FilterAPI {
  title: {
    $containsi?: string;
  };
  info: {
    date: {
      $between?: [string | Date, string | Date];};
    eventTypes: {
      name: {
        $in?: string | string[];
      };
    };
    community: {
      name: {
        $in?: string | string[];
      };
    };
  };
}
