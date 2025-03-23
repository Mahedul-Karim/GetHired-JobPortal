import React, { useState } from "react";
import Modal from "../Modal";
import Input from "../../form/Input";
import Button from "../../button/Button";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setResume: any;
}

const HeadlineEditor: React.FC<Props> = ({
  open,
  setOpen,
  setResume,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setResume((prev: any) => ({ ...prev, headline: text }));
    setText("");
    setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Edit Headling">
      <div className="space-y-4">
        <Input
          placeholder="Enter Headline"
          label="Headline"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default HeadlineEditor;
