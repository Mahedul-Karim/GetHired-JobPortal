import React, { useEffect, useRef, useState } from "react";
import Modal from "../Modal";
import Input from "../../form/Input";
import Button from "../../button/Button";
import { X } from "lucide-react";
import { useAlert } from "../../../../hooks/useAlert";
import { useResume } from "../../../../hooks/useResume";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setResume: any;
  skills: Array<string>;
  haveResume: boolean;
}

const SkillsBadge = ({
  skill,
  onDelete,
  index,
}: {
  skill: string;
  onDelete: (i: number) => void;
  index: number;
}) => {
  return (
    <div className="bg-primary-light-2 px-4 py-1 rounded-2xl  text-primary text-xs xs:text-sm capitalize flex items-center gap-2">
      <p>{skill}</p>
      <button type="button" onClick={onDelete.bind(null, index)}>
        <X className="size-5" />
      </button>
    </div>
  );
};

const SkillsModal: React.FC<Props> = ({
  open,
  setOpen,
  skills,
  setResume,
  haveResume,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [text, setText] = useState("");

  const { success: onSuccess, error: onError } = useAlert();

  const { mutate, isPending } = useResume({
    success: () => {
      setData([]);
      onSuccess("Skills updated successfully!");
    },
    error: (err: any) => {
      onError(err);
    },
    setOpen,
  });

  const handleSkillAdd = () => {
    if (!haveResume) {
      setResume((prev: any) => ({ ...prev, skills: [...skills, ...data] }));
      setOpen(false);
      setData([]);
      return;
    }

    const body = JSON.stringify({ skills: [...skills, ...data] });
    mutate({ body });
  };

  const handleSkillDelete = (index: number) => {
    const prevSkills = [...data];

    const newSkills = prevSkills.filter((_, i) => i !== index);

    setData(newSkills);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() !== "enter") {
      return;
    }

    setData((prev: any) => [...prev, text]);
    setText("");
  };

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Edit Skills">
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Add or edit skills"
            label="Skills"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={onEnter}
          />
          <div className="flex justify-between gap-2 mt-4">
            <div className="flex gap-2 flex-wrap">
              {data.length > 0 &&
                data.map((dat, i) => (
                  <SkillsBadge
                    key={i}
                    skill={dat}
                    onDelete={handleSkillDelete}
                    index={i}
                  />
                ))}
            </div>
            <Button
              style={{ padding: 0, fontSize: "18px" }}
              variant="outline"
              className="!size-8 shrink-0"
              onClick={() => {
                setData((prev: any) => [...prev, text]);
                setText("");
              }}
            >
              +
            </Button>
          </div>
        </div>
        <Button onClick={handleSkillAdd} disabled={isPending}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default SkillsModal;
