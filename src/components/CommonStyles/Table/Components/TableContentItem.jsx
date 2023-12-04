import { memo, useEffect, useMemo } from "react";
import CommonStyles from "../..";
import { v4 as uuidv4 } from "uuid";

const TableContentItem = ({ item, data, isOdd, key }) => {
  //! State
  const stickyStyle = useMemo(() => {
    if (item?.isSticky) {
      return {
        position: "sticky",
        left: 0,
      };
    }
    return {};
  }, [item]);

  const calculateTemplate = useMemo(() => {
    let template = "";
    if (item?.childrens) {
      for (const child of item?.childrens) {
        if (child.width && child.width > 0) {
          template += " " + child.width + "px";
        } else {
          template += " 1fr";
        }
      }
    }

    return template;
  }, [item]);
  //! Function

  useEffect(() => {
    console.log("mounted", key);
  }, []);

  //! Render
  if (item?.renderContent)
    return (
      <CommonStyles.Box
        key={item.id}
        sx={{
          padding: "16px",
          alignItems: "center",
          display: "flex",
          maxHeight: "64px",
          background: isOdd ? "#f2f4f7" : "#fff",
          ...stickyStyle,
        }}
      >
        {item.renderContent(data)}
      </CommonStyles.Box>
    );

  if (item?.childrens) {
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
        {item?.childrens.map((child) => {
          const key = uuidv4();

          return (
            <TableContentItem
              item={child}
              data={data}
              isOdd={isOdd}
              key={key}
            />
          );
        })}
      </CommonStyles.Box>
    );
  }
  return (
    <CommonStyles.Box
      sx={{
        padding: "16px",
        maxHeight: "64px",
        alignItems: "center",
        display: item?.isTextOverFlow ? "unset" : "flex",
        background: isOdd ? "#f2f4f7" : "#fff",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {data[item.id]}
    </CommonStyles.Box>
  );
};

export default memo(TableContentItem);
