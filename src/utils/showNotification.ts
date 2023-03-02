import { notification } from "antd";

export default (
  type: "error" | "warning" | "success" | "info",
  message: string,
  description: string
) => {
  notification[type]({
    message,
    description,
  });
};
