import { isArray } from "lodash";
import CommonStyles from "../..";
import { v4 as uuidv4 } from "uuid";
import { headerHeight } from "./TableHeader";

const TableHeaderChild = ({ item, currentLevel, totalLevel }) => {
  //! State

  //! Function

  //! Render

  if (
    !item.childrens ||
    !isArray(item.childrens) ||
    item.childrens.length === 0
  )
    return null;

  return (
    <CommonStyles.Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${item.childrens.length}, 1fr)`,
        gridGap: "16px",
      }}
    >
      {item.childrens.map((childItem, index) => {
        const isLastChild = index === item.childrens.length - 1;
        const key = uuidv4();

        return (
          <CommonStyles.Box key={key}>
            <CommonStyles.Box
              sx={{
                gap: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: childItem?.childrens ? "1px solid #EAECF0 " : "",
                height: childItem?.childrens
                  ? `${headerHeight}px`
                  : `${(totalLevel - currentLevel) * headerHeight}px`,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: "50%",
                  right: "0",
                  height: isLastChild ? 0 : "66%",
                  width: "2px",
                  background: "#EAECF0",
                  transform: "translateY(-50%)",
                },
              }}
            >
              {childItem?.title}
            </CommonStyles.Box>
            {childItem?.childrens && (
              <TableHeaderChild
                item={childItem}
                currentLevel={currentLevel + 1}
                totalLevel={totalLevel}
              />
            )}
          </CommonStyles.Box>
        );
      })}
    </CommonStyles.Box>
  );
};

export default TableHeaderChild;
