import React from "react";
import Modal from "../Modal";
import Input from "../../form/Input";
import Button from "../../button/Button";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkillsBadge = () => {
  return (
    <div className="bg-primary-light-2 px-4 py-1 rounded-2xl  text-primary text-xs xs:text-sm capitalize flex items-center gap-2">
      <p>Finance</p>
      <button type="button">
        <X className="size-5" />
      </button>
    </div>
  );
};

const SkillsModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Edit Skills">
      <form className="space-y-4">
        <div>
          <Input placeholder="Add or edit skills" label="Skills" />
          <div className="flex justify-between gap-2 mt-4">
            <div className="flex gap-2 flex-wrap">
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
              <SkillsBadge />
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

export default SkillsModal;
