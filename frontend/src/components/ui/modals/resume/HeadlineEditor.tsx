import React from "react";
import Modal from "../Modal";
import Input from "../../form/Input";
import Button from "../../button/Button";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeadlineEditor: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Edit Headling">
      <form className="space-y-4">
        <Input placeholder="Enter Headline" label="Headline" />
        <Button>Submit</Button>
      </form>
    </Modal>
  );
};

export default HeadlineEditor;
