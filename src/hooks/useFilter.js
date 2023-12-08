import { cloneDeep, isArray } from "lodash";
import { useCallback, useState } from "react";

const useFilter = (initialFilter) => {
  //! State
  const [filters, setFilters] = useState(initialFilter);

  //! Function

  const handleChangeSort = useCallback(
    (newSortBy) => {
      if (newSortBy === filters.sortBy) {
        setFilters((prev) => {
          return {
            ...prev,
            sortDirection:
              prev?.sortDirection?.toLowerCase() === "desc" ? "asc" : "desc",
          };
        });
      } else {
        setFilters((prev) => {
          return {
            ...prev,
            sortBy: newSortBy,
            sortDirection: "asc",
          };
        });
      }
    },
    [filters]
  );

  const handleChangePage = useCallback((newPage) => {
    setFilters((prev) => {
      return {
        ...prev,
        page: newPage,
      };
    });
  }, []);

  const handleSelectRow = useCallback((row) => {
    console.log("asdasd", row);
    setFilters((prev) => {
      const prevSelectedRows = prev?.selectedRows;
      if (!prevSelectedRows || !isArray(prevSelectedRows)) {
        throw new Error("selectedRows must be an array");
      } else {
        console.log("prevSelectedRows", prevSelectedRows);
        const index = prevSelectedRows.findIndex(
          (item) => item?.id === row?.id
        );

        if (index === -1) {
          return {
            ...prev,
            selectedRows: [...prevSelectedRows, row],
          };
        } else {
          const nextPrevSelectedRows = cloneDeep(prevSelectedRows);
          nextPrevSelectedRows.splice(index, 1);
          return {
            ...prev,
            selectedRows: nextPrevSelectedRows,
          };
        }
      }
    });
  }, []);

  return {
    handleChangeSort,
    handleChangePage,
    filters,
    setFilters,
    handleSelectRow,
  };
};

export default useFilter;
