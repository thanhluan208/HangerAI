import React, { useCallback, useMemo } from "react";
import CommonStyles from "..";
import CommonIcons from "../../CommonIcons";
import { Checkbox } from "@mui/material";
import PerfectScrollBar from "react-perfect-scrollbar";
import { cloneDeep, isArray } from "lodash";
import TableHeader from "./Components/TableHeader";

const TableContent = ({
  rowData,
  calculateTemplate,
  columns,
  hasCheckbox,
  isOdd,
  selectedRows,
  handleSelectRow,
}) => {
  //! State
  const isSelected = useMemo(() => {
    if (!selectedRows) return false;

    if (isArray(selectedRows)) {
      for (const row of selectedRows) {
        if (row?.id === rowData?.id) return true;
      }
    }

    return false;
  }, [selectedRows, rowData]);

  //! Function
  const onSelectRow = useCallback(() => {
    handleSelectRow(rowData);
  }, [handleSelectRow, rowData]);

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        display: "grid",
        gridTemplateColumns: calculateTemplate,

        cursor: "pointer",
        transition: "all .3s ease-in-out",
        "&:hover": {
          background: "#e7e7e7",
        },
      }}
    >
      {hasCheckbox && (
        <CommonStyles.Box
          centered
          sx={{ padding: "16px", background: isOdd ? "#f2f4f7" : "#fff" }}
        >
          <Checkbox
            sx={{ padding: "0" }}
            checked={isSelected}
            onClick={onSelectRow}
          />
        </CommonStyles.Box>
      )}
      {columns.map((column) => {
        const stickyStyle = column?.isSticky
          ? {
              position: "sticky",
              left: 0,
            }
          : {};

        if (column?.renderContent)
          return (
            <CommonStyles.Box
              key={column.id}
              sx={{
                padding: "16px",
                alignItems: "center",
                display: "flex",
                maxHeight: "64px",
                background: isOdd ? "#f2f4f7" : "#fff",
                ...stickyStyle,
              }}
            >
              {column.renderContent(rowData)}
            </CommonStyles.Box>
          );

        return (
          <CommonStyles.Box
            key={column.id}
            sx={{
              padding: "16px",
              maxHeight: "64px",
              alignItems: "center",
              display: column?.isTextOverFlow ? "unset" : "flex",
              background: isOdd ? "#f2f4f7" : "#fff",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              ...stickyStyle,
            }}
          >
            {rowData[column.id]}
          </CommonStyles.Box>
        );
      })}
    </CommonStyles.Box>
  );
};

const Table = ({
  data,
  columns,
  hasCheckbox,
  disabledCheckboxHeader,
  filters,
  handleChangeSort,
  tableWidth,
  maxHeight = "600px",
  maxWidth,
  handleSelectRow,
  headerLevel = 1,
}) => {
  //! State
  const { sortBy, sortDirection, selectedRows } = filters || {};
  const calculateTemplate = useMemo(() => {
    let template = hasCheckbox ? "80px" : "";

    columns.forEach((item) => {
      if (item.width && item.width > 0) {
        template += " " + item.width + "px";
      } else {
        template += " 1fr";
      }
    });

    return template;
  }, [columns, hasCheckbox]);

  const flattenColumns = useMemo(() => {
    const flatten = [];

    const flattenize = (column, level, temp) => {
      if (column?.childrens) {
        for (const child of column.childrens) {
          temp = { ...temp, [`level_${level}`]: column };
          flattenize(child, level + 1, temp);
        }
      } else {
        return flatten.push({ ...column, ...temp });
      }
    };

    for (const column of columns) {
      let level = 0;
      let temp = {};
      flattenize(column, level, temp);
    }

    return flatten;
  }, [columns]);

  //! Function

  console.log("colums", flattenColumns);

  //! Render

  return (
    <PerfectScrollBar
      style={{ maxWidth: maxWidth, overflow: "unset !important" }}
    >
      <TableHeader
        columns={columns}
        data={data}
        handleChangeSort={handleChangeSort}
        hasCheckbox={hasCheckbox}
        sortBy={sortBy}
        sortDirection={sortDirection}
        calculateTemplate={calculateTemplate}
        headerLevel={headerLevel}
        tableWidth={tableWidth}
      />

      <CommonStyles.Box
        sx={{
          width: !!tableWidth ? tableWidth : "100%",
        }}
      >
        <CommonStyles.Box
          sx={{
            ".scrollbar-container": {
              overflow: "unset !important",
            },
            ".ps__thumb-y": {
              display: "none !important",
            },
          }}
        >
          <PerfectScrollBar
            style={{
              maxHeight: `${maxHeight} `,
              overflow: "unset !important",
            }}
          >
            <CommonStyles.Box
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 2px 6px rgba(100, 116, 139, 0.12)",
                border: "1px solid #EAECF0",
              }}
            >
              {data.map((rowData, index) => {
                return (
                  <TableContent
                    rowData={rowData}
                    calculateTemplate={calculateTemplate}
                    key={rowData.id}
                    columns={columns}
                    hasCheckbox={hasCheckbox}
                    isOdd={index % 2 === 1}
                    selectedRows={selectedRows}
                    handleSelectRow={handleSelectRow}
                  />
                );
              })}
            </CommonStyles.Box>
          </PerfectScrollBar>
        </CommonStyles.Box>
      </CommonStyles.Box>
    </PerfectScrollBar>
  );
};

export default Table;
