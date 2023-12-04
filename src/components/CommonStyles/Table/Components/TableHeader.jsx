import React, { memo, useCallback } from "react";
import CommonIcons from "../../../CommonIcons";
import CommonStyles from "../..";
import { Checkbox } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import TableHeaderChild from "./TableHeaderChild";

export const headerHeight = 45;

const TableHeader = ({
  sortBy,
  sortDirection,
  handleChangeSort,
  columns,
  hasCheckbox,
  disabledCheckboxHeader,
  data,
  calculateTemplate,
  headerLevel = 1,
  tableWidth,
}) => {
  //! State

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
          animation: "fadeInSort 0.5s ease-out forwards",
          "@keyframes fadeInSort": {
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

  const renderCheckboxHeader = useCallback(
    (shouldHide) => {
      if (hasCheckbox) {
        if (disabledCheckboxHeader || shouldHide)
          return <CommonStyles.Box sx={{ padding: "16px" }}></CommonStyles.Box>;

        return (
          <CommonStyles.Box centered sx={{ padding: "0 16px" }}>
            <Checkbox
              sx={{
                padding: "0",
                height: `${headerLevel * headerHeight}px`,
                borderBottom: "1px solid #EAECF0",
                borderRadius: "0",
              }}
            />
          </CommonStyles.Box>
        );
      }
    },
    [hasCheckbox, disabledCheckboxHeader, headerLevel]
  );

  return (
    <CommonStyles.Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderRadius: "8px",
        marginBottom: "15px",
        boxShadow: "0px 2px 6px rgba(100, 116, 139, 0.12)",
        border: "1px solid #EAECF0",
        background: "#fff",
        width: !!tableWidth ? tableWidth : "100%",
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "grid",
          gridTemplateColumns: calculateTemplate,
        }}
      >
        {renderCheckboxHeader()}
        {columns.map((item) => {
          const key = uuidv4();
          return (
            <CommonStyles.Box
              key={key}
              sx={{
                padding: "0 16px",
                cursor: item?.sortable ? "pointer" : "",
                position: item?.isSticky ? "sticky" : "relative",
                left: item?.isSticky ? 0 : "",
                background: "#fff",
                zIndex: item?.isSticky ? 101 : "",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  height: "66%",
                  width: "2px",
                  background: "#EAECF0",
                  transform: "translateY(-50%)",
                },
              }}
              onClick={() => {
                if (item?.sortable) {
                  handleChangeSort(item.id);
                }
              }}
            >
              <CommonStyles.Box
                sx={{
                  gap: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: item?.childrens ? "1px solid #EAECF0 " : " ",
                  height: item?.childrens
                    ? `${headerHeight}px`
                    : `${headerLevel * headerHeight}px`,
                }}
              >
                {item?.renderTitle ? item.renderTitle(item, data) : item.title}

                {sortBy === item.id && renderSort()}
              </CommonStyles.Box>

              <TableHeaderChild
                item={item}
                currentLevel={1}
                totalLevel={headerLevel}
                renderSort={renderSort}
              />
            </CommonStyles.Box>
          );
        })}
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default memo(TableHeader);
