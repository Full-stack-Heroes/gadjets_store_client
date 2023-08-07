import { NavigateOptions, useSearchParams } from 'react-router-dom';

export const useQueryParamUpdater = (
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    paramName: string,
    paramValue: string,
    options?: NavigateOptions
  ) => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, paramValue);
    setSearchParams(params, options);
  };
};
