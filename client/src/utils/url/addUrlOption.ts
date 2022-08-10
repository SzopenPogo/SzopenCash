import { formatToUrlOptions } from "utils/url/formatToUrlOptions";
import { getUrlOptionKeyAndValue } from "utils/url/getUrlOptionKeyAndValue";
import { getUrlOptions } from "utils/url/getUrlOptions";
import { removeEmptyOptions } from "utils/url/removeEmptyOptions";


// Take url from window url ->
// If url is empty the add option ->
// If url contains option change value ->
// If url option is new then add option to the array ->
// Remove empty options ->
// Return formatted option url

export const addUrlOption = (option: string) => {
  const windowUrlOptions = getUrlOptions();
  const isUrlOptions = !!windowUrlOptions;

  const {urlOptionKey: optionKey} = getUrlOptionKeyAndValue(option);

  if(!isUrlOptions) {
    return formatToUrlOptions([option]);
  }

  let isOptionNew = true;
  const urlOptionArray = windowUrlOptions.slice(1).split('&');

  // If url options contains option then change value
  const urlOptions = urlOptionArray.map(urlOption => {
    const {urlOptionKey} = getUrlOptionKeyAndValue(urlOption);

    if(urlOptionKey === optionKey) {
      isOptionNew = false;
      return option
    }

    return urlOption;
  });

  //  Add new option to the array
  if(isOptionNew) {
    urlOptions.push(option);
  }

  const newUrlOptions = removeEmptyOptions(urlOptions);
  const optionsUrl = formatToUrlOptions(newUrlOptions);

  return optionsUrl;
}