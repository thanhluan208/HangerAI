import { toast } from "react-toastify";

const listType = ["success", "error", "info", "warning"];

const useToast = (content, type, option) => {
  if (!listType.includes(type)) throw new Error("Type is not valid");

  return toast[type](content, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    ...option,
  });
};

export const useToastPromise = async (
  promise,
  statusMessage,
  onSuccess,
  onFail
) => {
  const id = toast.loading(statusMessage?.pending || "Please wait...");

  try {
    const response = await promise();
    if (!onSuccess) {
      toast.update(id, {
        render: statusMessage?.success || "Success!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } else {
      onSuccess(response, () =>
        toast.update(id, {
          render: statusMessage?.success || "Success!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        })
      );
    }
  } catch (error) {
    if (!onFail) {
      toast.update(id, {
        render: error?.response?.data?.message || "Error!",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      onFail(error, () =>
        toast.update(id, {
          render: error?.response?.data?.message || "Error!",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        })
      );
    }
  }
};

export default useToast;
