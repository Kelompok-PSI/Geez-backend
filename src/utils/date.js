
export const dateToDateTime = (dt) => {
  return dt.toISOString().slice(0, 19).replace('T', ' ')
}