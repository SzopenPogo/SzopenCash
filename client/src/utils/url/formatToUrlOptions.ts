// RETURN formatted options, first arry item have ? others &
export const formatToUrlOptions = (options: Array<string>) => {
  let optionsUrl = '';

  options.forEach((option, index) => {
    if(index === 0) {
      optionsUrl = optionsUrl.concat(`?${option}`);
      return;
    }
    optionsUrl = optionsUrl.concat(`&${option}`);
  });

  return optionsUrl;
}