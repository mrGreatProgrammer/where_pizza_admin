import React from "react";
// import "antd/dist/antd.css";

import { Tooltip, Upload, UploadProps } from "antd";
import { RcFile } from "rc-upload/lib/interface";
import { UploadFile } from "antd/lib/upload/interface";
import { useForm, UseFormGetValues, UseFormSetValue } from "react-hook-form";

// import './uploader.module.scss';

type FileListT = UploadFile[];

type FormValuesT = { files: FileListT };

function useUploadHook(
  setValue: UseFormSetValue<FormValuesT>,
  getValues: UseFormGetValues<FormValuesT>
) {
  return React.useMemo(() => {
    const setFiles = (files: FileListT) => setValue("files", files);
    const files = getValues("files");
    const removeFile = (file:any) =>
      setFiles(files.filter((value) => value.fileName !== file.fileName));
    const addFile = (file:any) => setFiles([...files, file]);
    return { removeFile, addFile };
  }, [getValues, setValue]);
}

type Response = {
  status: number;
};

const fakeChunkFileUpload = (
  file: RcFile,
  startPos: number,
  endPos: number
) => {
  //todo Sanya тут нужно делать запрос на бэк забирая chunk от файла
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      const r: Response = { status: 200 };
      resolve(r);
    }, 1000);
  });
};

const DragableUploadListItem = ({ originNode, file, fileList }:any) => {
  const ref = React.useRef();
  const errorNode = (
    <Tooltip title="Upload Error">{originNode.props.children}</Tooltip>
  );
  return (
    //@ts-ignore
    <div ref={ref} style={{ cursor: "move" }}>
      {file.status === "error" ? errorNode : originNode}
    </div>
  );
};

const itemRender = (originNode:any, file:any, currFileList:any) => (
  <DragableUploadListItem
    originNode={originNode}
    file={file}
    fileList={currFileList}
  />
);

export interface UploaderProps {
  addFile: (file: UploadFile) => void;
  removeFile: (file: UploadFile) => void;
}

const baseUploaderProps: UploadProps = {
  defaultFileList: [],
  itemRender,
  //@ts-ignore
  progress: true,
  customRequest: async ({ file, onSuccess, onProgress }) => {
    const typedFile: RcFile = file as RcFile;
    const size = typedFile.size;
    const chunkSize = 8 * 1024 * 1024;
    const chunkCount = size / chunkSize;
    console.log("chunkCount: ", chunkCount);
    for (let i = 0; i < chunkCount; i++) {
      const startPos = chunkSize * i;
      const endPos = startPos * (i + 1);
      await fakeChunkFileUpload(typedFile, startPos, endPos);
      const percent = Math.round(((chunkSize * (i + 1)) / size) * 100).toFixed(
        2
      );
      console.log("onProgress " + typedFile.name + ": " + percent);
      //@ts-ignore
      onProgress(
        {
          percent: percent,
        },
        //@ts-ignore
        file
      );
    }
    //@ts-ignore
    onSuccess(null, typedFile);
  },
  onStart(file:any) {
    console.log("onStart", file, file.name);
  },
  onError(err:any) {
    console.log("onError", err);
  },
};

function UploaderPrivate({ addFile, removeFile }: UploaderProps) {
  const adaptedProps: UploadProps = {
    ...baseUploaderProps,
    //@ts-ignore
    onSuccess(res:any, file:any) {
      console.log("onSuccess", res, file.name);
      addFile(file);
    },
    onRemove: removeFile,
  };
  return (
    <div style={{ width: "200px" }}>
      <h1>Welcome to uploader!</h1>
      <Upload {...adaptedProps}>
        <button type="button">Загрузить</button>
      </Upload>
    </div>
  );
}

const UploadForm = ({setValue, getValues}:any) => {
  // const { setValue, getValues } = useForm<FormValuesT>({
  //   defaultValues: { files: [] },
  // });
  const { addFile, removeFile } = useUploadHook(setValue, getValues);
  return (
    <div>
      <UploaderPrivate addFile={addFile} removeFile={removeFile} />
    </div>
  );
};

export default UploadForm;
