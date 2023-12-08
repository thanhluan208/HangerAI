import React, { useMemo } from "react";
import CommonStyles from "..";
import PerfectScrollBar from "react-perfect-scrollbar";
import TableHeader from "./Components/TableHeader";
import TableContent from "./Components/TableContent";

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

  //! Function

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
        disabledCheckboxHeader={disabledCheckboxHeader}
      />

      <CommonStyles.Box
        sx={{
          width: !!tableWidth ? tableWidth : "100%",
          borderRadius: "12px",
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
            borderRadius: "12px",
          }}
        >
          <PerfectScrollBar
            style={{
              maxHeight: `${maxHeight} `,
              overflow: "unset !important",
              borderRadius: "12px",
            }}
          >
            <CommonStyles.Box
              sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "0px 2px 6px rgba(100, 116, 139, 0.12)",
                border: "1px solid #EAECF0",
                borderRadius: "12px",
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
