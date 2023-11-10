import React, { Fragment } from "react"
import CommonStyles from "../../../components/CommonStyles"

const ModelsList = () => {
  //! State
  const [selectedModel, setSelectedModel] = React.useState(5)

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        flexWrap: "wrap",
        display: "flex",
        gap: "100px",
        padding: "0 100px",
        marginTop: "-150px",
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((elm) => {
        const isActive = selectedModel === elm
        return (
          <CommonStyles.Box
            key={elm}
            sx={{
              width: "calc((100%  - 100px * 3) / 4)",
              borderRadius: "12px",
              backgroundColor: "#fff",
              padding: "5px",
              transition: "all 0.5s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                boxShadow: "0 5px 10px rgba(0,0,0,0.5)",
              },
            }}
            onClick={() => {
              setSelectedModel(elm)
            }}
          >
            {elm === 12 ? (
              <CommonStyles.Box
                centered
                sx={{
                  height: "280px",
                  background: "#f7d46e",
                  borderRadius: "10px",
                }}
              >
                Add new models +
              </CommonStyles.Box>
            ) : (
              <Fragment>
                <CommonStyles.Box
                  centered
                  sx={{
                    height: "280px",
                    background: isActive ? "#f7d46e" : "#fff",
                    borderRadius: "10px",
                  }}
                >
                  This is image
                </CommonStyles.Box>
                <CommonStyles.Box centered sx={{ marginTop: "20px" }}>
                  <CommonStyles.Typography type="boldText">
                    Model name: {elm}
                  </CommonStyles.Typography>
                </CommonStyles.Box>
              </Fragment>
            )}
          </CommonStyles.Box>
        )
      })}
    </CommonStyles.Box>
  )
}

export default ModelsList
