export const validatePasswordValue = (
  password: string,
  passwordMinLenght: number, 
  passwordRegExpData: string
) => {
  const messages = [] as Array<string>;
  const passwordRegExp = new RegExp(passwordRegExpData);

  const isPasswordLength = password.length >= passwordMinLenght;
  const isPasswordRegExp = passwordRegExp.test(password);

  if(!isPasswordLength) {
    messages.push(`Minimalna ilość znaków to ${passwordMinLenght}`);
  }

  if(!isPasswordRegExp) {
    messages.push('Wymagana jedna duża litera i jedna liczba o od 0 - 9');
  }
  
  return messages;
}