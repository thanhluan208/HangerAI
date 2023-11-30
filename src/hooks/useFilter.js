import { useCallback, useState } from "react"

const useFilter = (initialFilter) => {
  //! State
  const [filters, setFilters] = useState(initialFilter)

  //! Function

  const handleChangeSort = useCallback(
    (newSortBy) => {
      if (newSortBy === filters.sortBy) {
        setFilters((prev) => {
          return {
            ...prev,
            sortDirection:
              prev?.sortDirection?.toLowerCase() === "desc" ? "asc" : "desc",
          }
        })
      } else {
        setFilters((prev) => {
          return {
            ...prev,
            sortBy: newSortBy,
            sortDirection: "asc",
          }
        })
      }
    },
    [filters]
  )

  const handleChangePage = useCallback((newPage) => {
    setFilters((prev) => {
      return {
        ...prev,
        page: newPage,
      }
    })
  }, [])

  return {
    handleChangeSort,
    handleChangePage,
    filters,
    setFilters,
  }
}

export default useFilter
