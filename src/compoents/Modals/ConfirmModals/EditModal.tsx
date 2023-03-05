import { Modal } from "antd";
import React from "react";

const EditModal = ({ open, onCancel }: any) => {
  return (
    <Modal destroyOnClose open={open} onCancel={onCancel}>
      <h3 className="mx-2 my-8 font-semibold text-2xl">
        Are you sure to edit this product ?
      </h3>
    </Modal>
  );
};

export default EditModal;
