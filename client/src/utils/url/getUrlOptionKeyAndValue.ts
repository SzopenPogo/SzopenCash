export const getUrlOptionKeyAndValue = (option: string) => {
  const urlOptionKey = option.split('=')[0];
  const urlOptionValue = option.split('=')[1];

  return { urlOptionKey, urlOptionValue }
}