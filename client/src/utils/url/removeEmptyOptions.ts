import { getUrlOptionKeyAndValue } from "utils/url/getUrlOptionKeyAndValue";

export const removeEmptyOptions = (options: Array<string>) => {
  const filteredOptions = options.filter(option => {
    const {urlOptionValue} = getUrlOptionKeyAndValue(option);
    const isValue = !!urlOptionValue
    return isValue;
  });

  return filteredOptions;
}