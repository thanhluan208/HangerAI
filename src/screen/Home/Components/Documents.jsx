import React from "react"
import CommonStyles from "../../../components/CommonStyles"
import { isEmpty } from "lodash"
import { Paper } from "@mui/material"
import CommonIcons from "../../../components/CommonIcons"
import useFilter from "../../../hooks/useFilter"

const Documents = () => {
  //! State
  const document = [
    {
      name: "Welcome to hanger.ai",
      type: "General",
      created: new Date(),
      lastEdited: new Date(),
      wordCount: 542,
    },
    {
      name: "Welcome to hanger.ai 2",
      type: "General",
      created: new Date(),
      lastEdited: new Date(),
      wordCount: 234,
    },
  ]

  const { filters, handleChangeSort } = useFilter({
    sortBy: "wordCount",
    sortDirection: "asc",
    page: 1,
  })

  //! Function

  //! Render
  return (
    <CommonStyles.Box
      sx={{
        padding: "20px",
        width: "100%",
      }}
    >
      <CommonStyles.Box
        sx={{
          display: "flex",
          gap: "15px",
          alignItem: "center",
          justifyContent: "start",
        }}
      >
        <CommonStyles.Typography
          variant="h6"
          component="h6"
          sx={{
            fontWeight: "bold",
          }}
        >
          Documents
        </CommonStyles.Typography>
        {!isEmpty(document) && (
          <CommonStyles.Box
            centered
            sx={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
            }}
          >
            {document.length}
          </CommonStyles.Box>
        )}
      </CommonStyles.Box>

      <CommonStyles.Box
        sx={{
          marginTop: "20px",
        }}
      ></CommonStyles.Box>

      <CommonStyles.Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "8px",
        }}
      >
        <Paper
          sx={{
            display: "grid",
            gridTemplateColumns: "calc(20% - 5px) calc(80% - 5px)",
            padding: "10px",
            gridGap: "10px",
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CommonStyles.Box
            centered
            sx={{
              padding: "0 5px",
            }}
          >
            <CommonIcons.Add
              style={{
                fontSize: "1.5rem",
                color: "#5c3883",
              }}
            />
          </CommonStyles.Box>
          <CommonStyles.Box
            centered
            sx={{
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <CommonStyles.Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              New doc
            </CommonStyles.Typography>
            <CommonStyles.Typography
              sx={{
                fontSize: ".75rem",
                opacity: ".7",
              }}
            >
              Start writing in a fresh new document
            </CommonStyles.Typography>
          </CommonStyles.Box>
        </Paper>
      </CommonStyles.Box>

      <CommonStyles.Box sx={{ margin: "20px 0" }}>
        <CommonStyles.Table
          hasCheckbox
          filters={filters}
          handleChangeSort={handleChangeSort}
        />
      </CommonStyles.Box>
    </CommonStyles.Box>
  )
}

export default Documents
