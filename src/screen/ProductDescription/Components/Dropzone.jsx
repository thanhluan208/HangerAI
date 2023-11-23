import React, { useCallback, useMemo, useState } from "react"
import { useDropzone } from "react-dropzone"
import CommonStyles from "../../../components/CommonStyles"
import CommonIcons from "../../../components/CommonIcons"

const backgroundImage =
  "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='%23333' stroke-width='3' stroke-dasharray='12' stroke-dashoffset='22' stroke-linecap='square'/%3e%3c/svg%3e"

const Dropzone = ({ form, field }) => {
  //! State
  const { name, value } = field
  const { setFieldValue } = form

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      const { result } = e.target
      setFieldValue(name, result)
    }

    fileReader.readAsDataURL(file)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: [".png", ".jpeg", ".jpg"],
    onDropAccepted: onDrop,
  })

  //! Function

  //! Render

  return (
    <CommonStyles.Box
      centered
      sx={{
        width: "85%",
        aspectRatio: "1",
        borderRadius: "23px",
        backgroundColor: value ? "transparent" : "#fafcfe26",
        backgroundImage: value ? "" : `url("${backgroundImage}")`,
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {value ? (
        <img
          src={value}
          alt="file"
          style={{
            width: "80%",
          }}
        />
      ) : (
        <CommonStyles.Box
          centered
          sx={{
            height: "100%",
            flexDirection: "column",
            gap: "20px",
            cursor: "pointer",
          }}
        >
          <CommonStyles.Box
            centered
            sx={{
              flexDirection: "column",
              width: "80%",
              padding: "80px 0",
              borderRadius: "23px",
            }}
          >
            <CommonIcons.Image fontSize="4rem" color="#f7d46e" />

            <CommonStyles.Box>
              {"Drag 'n' drop your image here..."}
            </CommonStyles.Box>
          </CommonStyles.Box>
        </CommonStyles.Box>
      )}
    </CommonStyles.Box>
  )
}

export default Dropzone
