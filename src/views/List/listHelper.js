export const filterList = (item, search) => {
   const keysToFilter = ['name', 'status', 'tags']

   return Object.entries(item).some(
      ([key, value]) =>
         (keysToFilter.includes(key) && typeof value === 'string'
            ? value.toLowerCase().includes(search.toLowerCase())
            : null) ||
         (keysToFilter.includes(key) && key === 'tags'
            ? value.includes(
                 search
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + search.slice(1)
              )
            : null)
   )
}
export const mapList = item => {
   const tags_display = item.tags.join(', ')
   const cords_display = item.cords.join(', ')
   return { ...item, tags_display, cords_display }
}
