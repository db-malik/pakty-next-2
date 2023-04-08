// This function takes in three parameters: the array of items, the current page number, and the number of items to display per page. It calculates the starting and ending indexes of the items to display based on these parameters, and returns a new array containing only the items for the current page.
export const paginate = (items, page, pageSize) => {
  const startIndex = (page - 1) * pageSize
  const endIndex = page * pageSize
  return items.slice(startIndex, endIndex)
}
