import { Modal } from "antd";
import React from "react";

const DeleteModal = ({ open, onCancel, onOk }: any) => {
  return (
    <Modal destroyOnClose open={open} onCancel={onCancel} onOk={onOk}>
      <h3 className="mx-2 my-8 font-semibold text-2xl">
        Are you sure to delete this product ?
      </h3>
    </Modal>
  );
};

export default DeleteModal;
