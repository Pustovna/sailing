import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getPosts } from "../actions/events";

interface IRanges {
  startDate: Date;
  endDate: Date;
  key: string;
}

interface Filters {
  query: string;
  type: string | string[];
  community: string | string[];
  date: IRanges;
}

interface FilterContextType {
  filters: Filters;
  updateFilter: (
    key: keyof Filters,
    value: string | string[] | IRanges
  ) => void;
  data: any[]; // Здесь можно уточнить тип данных, если известен
}

const initialContext: FilterContextType = {
  filters: {
    query: "",
    type: "",
    community: "",
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  },
  updateFilter: () => {},
  data: [],
};

const FilterContext = createContext<FilterContextType>(initialContext);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>(initialContext.filters);
  const [
    abortController,
    setAbortController,
  ] = useState<AbortController | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true); 

  const [data, setData] = useState<any[]>([]);

  // Функция для обновления фильтров
  const updateFilter = (
    name: keyof Filters,
    value: string | string[] | IRanges
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Эффект для выполнения запроса на сервер при изменении фильтров
  useEffect(() => {

    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if (abortController) {
      abortController.abort();
    }

    const controller = new AbortController();
    setAbortController(controller);

    const fetchData = async () => {
      try {
         const {error, success} = await getPosts(filters);
          console.log(success);
        if (error) {
          console.log(error);
        }

  
        setData(success);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Запрос был отменен");
        } else {
          console.error("Ошибка при получении данных:", error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Отменяем запрос при размонтировании
    };
  }, [filters]);

  return (
    <FilterContext.Provider value={{ filters, updateFilter, data }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
