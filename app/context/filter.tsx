import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getPosts } from "../actions/events";
import { IRanges, Filters } from "@/app/types/EventFilter";

interface FilterContextType {
  filters: Filters;
  updateFilter: (
    key: keyof Filters,
    value: string | string[] | IRanges
  ) => void;
  data: { data: any[] };
}

const initialContext: FilterContextType = {
  filters: {
    query: "",
    type: "",
    community: "",
    date: {
      startDate: "",
      endDate: "",
    },
  },
  updateFilter: () => {},
  data: { data: [] },
};

const FilterContext = createContext<FilterContextType>(initialContext);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>(initialContext.filters);
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const [data, setData] = useState<{ data: any[] }>({ data: [] });

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
        const { error, success } = await getPosts(filters);
        if (error) {
          console.log(error);
        }

        setData(success);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
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
