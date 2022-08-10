// RETURN everything after ? in window URL
export const getUrlOptions = () => {
  const url = window.location.href
  const questionMark = url.indexOf("?");

  if(questionMark === -1) {
    return '';
  }
  
  const options = url.slice(questionMark, url.length);
  return options;
}