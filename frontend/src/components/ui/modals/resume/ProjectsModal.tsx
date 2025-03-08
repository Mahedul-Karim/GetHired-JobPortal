import { X } from "lucide-react";
import React from "react";
import Button from "../../button/Button";
import Input from "../../form/Input";
import Modal from "../Modal";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TechstackBadge = () => {
  return (
    <div className="bg-primary-light-2 px-4 py-1 rounded-2xl  text-primary text-xs xs:text-sm capitalize flex items-center gap-2">
      <p>Finance</p>
      <button type="button">
        <X className="size-5" />
      </button>
    </div>
  );
};

const ProjectsModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Add Projects">
      <form className="space-y-4">
        <Input placeholder="Enter your project name" label="Project Name" />
        <Input placeholder="Enter your project link" label="Project Link" />
        <div>
          <Input placeholder="Example: React Js" label="Technology Used" />
          <div className="flex justify-between gap-2 mt-4">
            <div className="flex gap-2 flex-wrap">
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
              <TechstackBadge />
            </div>
            <Button
              style={{ padding: 0, fontSize: "18px" }}
              variant="outline"
              className="!size-8 shrink-0"
            >
              +
            </Button>
          </div>
        </div>
        <Button>Submit</Button>
      </form>
    </Modal>
  );
};

export default ProjectsModal;
