import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import { cloneDeep } from "lodash";

const itemPerRow = 6;
const itemWidth = (1658 - 10 * 12 - 80) / itemPerRow;

const imageList = [
  {
    src: "https://i.pinimg.com/236x/5f/4a/71/5f4a71b8b9c35540adc745b76b50a018.jpg",
    height: 295,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/20/e8/8b/20e88b18d1b93da7a84a239429defb4d.jpg",
    height: 352,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/7c/d1/da/7cd1daf3d8ce615d1d52855cdc5b9904.jpg",
    height: 532,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/5f/4a/71/5f4a71b8b9c35540adc745b76b50a018.jpg",
    height: 295,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/20/e8/8b/20e88b18d1b93da7a84a239429defb4d.jpg",
    height: 352,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/53/94/df/5394dfca4ee02dfed6b34c6132a45a13.jpg",
    height: 236,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/5f/4a/71/5f4a71b8b9c35540adc745b76b50a018.jpg",
    height: 295,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/20/e8/8b/20e88b18d1b93da7a84a239429defb4d.jpg",
    height: 352,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/7c/d1/da/7cd1daf3d8ce615d1d52855cdc5b9904.jpg",
    height: 532,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/5f/4a/71/5f4a71b8b9c35540adc745b76b50a018.jpg",
    height: 295,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/20/e8/8b/20e88b18d1b93da7a84a239429defb4d.jpg",
    height: 352,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/53/94/df/5394dfca4ee02dfed6b34c6132a45a13.jpg",
    height: 236,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/7c/d1/da/7cd1daf3d8ce615d1d52855cdc5b9904.jpg",
    height: 532,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/5f/4a/71/5f4a71b8b9c35540adc745b76b50a018.jpg",
    height: 295,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/20/e8/8b/20e88b18d1b93da7a84a239429defb4d.jpg",
    height: 352,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/5f/4a/71/5f4a71b8b9c35540adc745b76b50a018.jpg",
    height: 295,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/20/e8/8b/20e88b18d1b93da7a84a239429defb4d.jpg",
    height: 352,
    width: itemWidth,
  },
  {
    src: "https://i.pinimg.com/236x/53/94/df/5394dfca4ee02dfed6b34c6132a45a13.jpg",
    height: 236,
    width: itemWidth,
  },
];

const HistoryFile = () => {
  //! State
  const transformedData = React.useMemo(() => {
    const newData = [];

    let totalRowHeight = [];

    for (let i = 0; i < imageList.length; i++) {
      const newObj = cloneDeep(imageList[i]);

      newObj.translateX = (i % itemPerRow) * itemWidth + (i % itemPerRow) * 20;
      if (i < itemPerRow) {
        newObj.translateY = 0;
        totalRowHeight.push(newObj.height + 30);
      } else {
        newObj.translateY = totalRowHeight[i % itemPerRow];
        totalRowHeight[i % itemPerRow] =
          totalRowHeight[i % itemPerRow] + newObj.height + 30;
      }

      newData.push(newObj);
    }

    return newData;
  }, []);

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "0 40px",
      }}
    >
      <CommonStyles.Box
        sx={{
          position: "relative",
        }}
      >
        {transformedData.map((item, index) => {
          return (
            <CommonStyles.Box
              sx={{
                padding: "15px 10px",
                borderRadius: "12px",
                transform: `translate(${item.translateX}px, ${item.translateY}px)`,
                width: item.width,
                height: item.height,
                top: "0",
                left: "0",
                position: "absolute",
              }}
            >
              <img
                src={item.src}
                alt=""
                style={{
                  width: item.width,
                  height: item.height,
                  borderRadius: "12px",
                }}
              />
            </CommonStyles.Box>
          );
        })}
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default HistoryFile;
