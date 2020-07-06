export const apiUrl =
  process.env.NODE_ENV === 'production'
    ? `${process.env.REACT_APP_API}`
    : `${process.env.REACT_APP_LOCAL_API}`
