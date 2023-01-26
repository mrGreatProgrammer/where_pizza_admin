import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon: JSX.Element = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner: React.FC = (): JSX.Element => {
  return <Spin indicator={antIcon} />;
};

export default Spinner;
