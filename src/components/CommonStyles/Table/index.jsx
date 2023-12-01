import React, { useCallback, useMemo } from "react";
import CommonStyles from "..";
import CommonIcons from "../../CommonIcons";
import { Checkbox } from "@mui/material";
import PerfectScrollBar from "react-perfect-scrollbar";
import { isArray } from "lodash";

const columns = [
  {
    id: "title",
    title: "Title",
    width: 300,
  },
  {
    id: "type",
    title: "Type",
    renderContent: (props) => {
      return (
        <CommonStyles.Box
          sx={{
            padding: "5px 15px",
            borderRadius: "8px",
            border: "solid .5px #ccc",
          }}
        >
          {props.type}
        </CommonStyles.Box>
      );
    },
  },
  {
    id: "dateCreated",
    renderTitle: (props) => {
      return <CommonStyles.Box>Date created</CommonStyles.Box>;
    },
    isTextOverFlow: true,
    sortable: true,
  },
  {
    id: "lastEdited",
    title: "Last edited",
    isTextOverFlow: true,
    sortable: true,
  },
  {
    id: "wordCount",
    title: "Word count",
    renderContent: (props) => {
      return (
        <CommonStyles.Box
          centered
          sx={{ gap: "10px", justifyContent: "start" }}
        >
          <CommonIcons.Stats />

          <CommonStyles.Typography>{props.wordCount}</CommonStyles.Typography>
        </CommonStyles.Box>
      );
    },
    sortable: true,
  },
];

const data = [
  {
    id: Math.random() * 1000000,
    title: "Welcome to HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome to HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome to HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome to HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
];

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
        background: isOdd ? "#f2f4f7" : "#fff",
        cursor: "pointer",
        transition: "all .3s ease-in-out",
        "&:hover": {
          background: "#e7e7e7",
        },
      }}
    >
      {hasCheckbox && (
        <CommonStyles.Box centered sx={{ padding: "16px" }}>
          <Checkbox
            sx={{ padding: "0" }}
            checked={isSelected}
            onClick={onSelectRow}
          />
        </CommonStyles.Box>
      )}
      {columns.map((column) => {
        if (column?.renderContent)
          return (
            <CommonStyles.Box
              key={column.id}
              sx={{
                padding: "16px",
                alignItems: "center",
                display: "flex",
                maxHeight: "64px",
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
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
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
  hasCheckbox,
  disabledCheckboxHeader,
  filters,
  handleChangeSort,
  tableWidth,
  maxHeight = "600px",
  maxWidth,
  handleSelectRow,
}) => {
  //! State
  const { sortBy, sortDirection, page, selectedRows } = filters || {};
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
  const renderSort = useCallback(() => {
    if (!sortBy || !sortDirection) return null;

    return (
      <CommonIcons.Up
        style={{
          transform:
            sortDirection.toLowerCase() === "desc"
              ? "rotate(180deg)"
              : "rotate(0deg)",
          transition: "all .15s ease-in",
          animation: "fade-in-sort 0.5s ease-out forwards",
          "@keyframes fade-in-sort": {
            "0%": {
              opacity: 0,
            },
            "100%": {
              opacity: 1,
            },
          },
        }}
      />
    );
  }, [sortBy, sortDirection]);

  const renderCheckboxHeader = useCallback(() => {
    if (hasCheckbox) {
      if (disabledCheckboxHeader)
        return <CommonStyles.Box sx={{ padding: "16px" }}></CommonStyles.Box>;

      return (
        <CommonStyles.Box centered sx={{ padding: "16px" }}>
          <Checkbox sx={{ padding: "0" }} />
        </CommonStyles.Box>
      );
    }
  }, [hasCheckbox, disabledCheckboxHeader]);

  return (
    <PerfectScrollBar style={{ maxWidth: maxWidth }}>
      <CommonStyles.Box
        sx={{
          width: !!tableWidth ? tableWidth : "100%",
        }}
      >
        <CommonStyles.Box
          sx={{
            display: "grid",
            gridTemplateColumns: calculateTemplate,
            borderRadius: "8px",
            background: "#fff",
            marginBottom: "15px",
            boxShadow: "0px 2px 6px rgba(100, 116, 139, 0.12)",
            border: "1px solid #EAECF0",
          }}
        >
          {renderCheckboxHeader()}
          {columns.map((item) => {
            return (
              <CommonStyles.Box
                key={item.id}
                sx={{
                  padding: "16px",
                  gap: "10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: item?.sortable ? "pointer" : "",
                }}
                onClick={() => {
                  if (item?.sortable) {
                    handleChangeSort(item.id);
                  }
                }}
              >
                {item?.renderTitle ? item.renderTitle(item, data) : item.title}

                {sortBy === item.id && renderSort()}
              </CommonStyles.Box>
            );
          })}
        </CommonStyles.Box>

        <PerfectScrollBar
          style={{
            maxHeight: maxHeight,
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
    </PerfectScrollBar>
  );
};

export default Table;
