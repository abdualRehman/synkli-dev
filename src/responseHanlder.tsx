import { toast, ToastOptions } from "react-toastify";

export const toastHandler = (message: string, type: "success" | "error"): void => {
    const toastOptions: ToastOptions = {
        autoClose: 1000,
    };

    if (type === "success") {
        toast.success(message, toastOptions);
    } else if (type === "error") {
        toast.error(message, toastOptions);
    }
};
