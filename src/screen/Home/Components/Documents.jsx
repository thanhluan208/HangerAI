import React from "react";
import CommonStyles from "../../../components/CommonStyles";
import { isEmpty } from "lodash";
import { Paper } from "@mui/material";
import CommonIcons from "../../../components/CommonIcons";
import useFilter from "../../../hooks/useFilter";

const columns = [
  {
    id: "title",
    title: "Title",
    width: 1000,
    childrens: [
      {
        id: "title_1",
        title: "Title 1",
        childrens: [
          {
            id: "title_1_1",
            title: "Title 1.1",
          },
          {
            id: "title_1_2",
            title: "Title 1.2",
          },
        ],
      },
      {
        id: "title_2",
        title: "Title 2",
      },
    ],
  },
  {
    id: "type",
    title: "Type",
    width: 600,
    childrens: [
      {
        id: "type_1",
        title: "Type 1",
        renderContent: (props) => {
          return (
            <CommonStyles.Box
              sx={{
                padding: "5px 15px",
                borderRadius: "8px",
                border: "solid .5px #ccc",
              }}
            >
              {props.type_1}
            </CommonStyles.Box>
          );
        },
      },
      {
        id: "type_2",
        title: "Type 2",
        renderContent: (props) => {
          return (
            <CommonStyles.Box
              sx={{
                padding: "5px 15px",
                borderRadius: "8px",
                border: "solid .5px #ccc",
              }}
            >
              {props.type_2}
            </CommonStyles.Box>
          );
        },
      },
      {
        id: "type_3",
        title: "Type 3",
        renderContent: (props) => {
          return (
            <CommonStyles.Box
              sx={{
                padding: "5px 15px",
                borderRadius: "8px",
                border: "solid .5px #ccc",
              }}
            >
              {props.type_3}
            </CommonStyles.Box>
          );
        },
      },
    ],
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

const simpleColumns = [
  {
    id: "title",
    title: "Title",
    width: 400,
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
    width: 500,
  },
  {
    id: "lastEdited",
    title: "Last edited",
    isTextOverFlow: true,
    width: 500,
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
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title_1_1: "Welcome ",
    title_1_2: "To ",
    title_2: "The HangerAI",
    type_1: "Document",
    type_2: "Template",
    type_3: "Folder",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
];

const simpleData = [
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
  {
    id: Math.random() * 1000000,
    title: "Welcome To The HangerAI",
    type: "Document",
    dateCreated: new Date().toString(),
    lastEdited: new Date().toString(),
    wordCount: 435,
  },
];

const Documents = () => {
  //! State

  const { filters, handleChangeSort, handleSelectRow } = useFilter({
    sortBy: "wordCount",
    sortDirection: "asc",
    page: 1,
    selectedRows: [],
  });

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
        {!isEmpty(simpleData) && (
          <CommonStyles.Box
            centered
            sx={{
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
            }}
          >
            {simpleData.length}
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
          disabledCheckboxHeader
          handleSelectRow={handleSelectRow}
          tableWidth={2000}
          data={simpleData}
          columns={simpleColumns}
          headerLevel={1}
          maxWidth="80vw"
        />
      </CommonStyles.Box>
    </CommonStyles.Box>
  );
};

export default Documents;
