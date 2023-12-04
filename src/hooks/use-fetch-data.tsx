import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { ApiResponse } from '../types/blogs';

type FetcherFunction<T> = () => Promise<AxiosResponse<ApiResponse<T>, any>>;

export const useFetchData = <T,>(fetcher: FetcherFunction<T>) => {
  const [data, setData] = useState<ApiResponse<T>['data']>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const { data } = await fetcher();

        if (isMounted) {
          setData(data.data);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (isLoading && !data.length) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading } as const;
};
