import React from "react";
import Button from "../../button/Button";
import Input from "../../form/Input";
import Modal from "../Modal";
import TextArea from "../../form/TextArea";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EducationModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Education">
      <form className="space-y-4">
        <Input placeholder="Example: Bachelor of Science" label="Degree" />
        <Input placeholder="Enter your university name" label="University" />
        <Input placeholder="Example: 2006-2010" label="Duration" />
        <TextArea
          placeholder="Extra Description"
          label="Write Description(optional)"
        />
        <Button>Submit</Button>
      </form>
    </Modal>
  );
};

export default EducationModal;
