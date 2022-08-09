export const validateUserNameValue = (
  userName: string, 
  userNameMinLenght: number
) => {
  return userName.length >= userNameMinLenght
}