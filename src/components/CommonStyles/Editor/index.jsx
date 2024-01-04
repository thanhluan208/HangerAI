import React, { useCallback, useEffect, useRef } from "react";
import { Editor as TinyMCE } from "@tinymce/tinymce-react";
import { useSave } from "../../../stores/useStores";
import cachedKeys from "../../../constants/cachedKeys";

const Editor = ({ init, editorKey, ...otherProps }) => {
  //! State
  const [value, setValue] = React.useState("Welcome to TinyMCE!");
  const editorRef = useRef();
  const save = useSave();
  //! Function
  const onChange = useCallback((newValue, editor) => {
    setValue(newValue);
  }, []);

  useEffect(() => {
    save(cachedKeys.setValueEditor, setValue);
    if (editorKey) {
      save(editorKey, editorRef);
    }
  }, [save, setValue]);

  //! Render
  return (
    <TinyMCE
      apiKey="j5giouin7cjrxypzp0sj90gyhulrvwsqbnx587whv09ad4su"
      ref={editorRef}
      init={{
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (request, respondWith) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
          ),
        ...init,
      }}
      value={value}
      onEditorChange={onChange}
      onInit={(evt, editor) => {
        save(cachedKeys.editorDom, editor.dom);
      }}
      {...otherProps}
    />
  );
};

export default Editor;
