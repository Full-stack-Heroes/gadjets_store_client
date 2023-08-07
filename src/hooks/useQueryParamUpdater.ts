import { useSearchParams } from 'react-router-dom';

export const useQueryParamUpdater = (
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (paramName: string, paramValue: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, paramValue);
    setSearchParams(params);
  };
};
