import { X } from "lucide-react";
import React, { useReducer, useState } from "react";
import Button from "../../button/Button";
import Input from "../../form/Input";
import Modal from "../Modal";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  projects: any[];
  setResume: any;
  haveResume: boolean;
  setNewResume: any;
}

const TechstackBadge = ({
  title,
  onDelete,
  index,
}: {
  title: string;
  onDelete: (i: number) => void;
  index: number;
}) => {
  return (
    <div className="bg-primary-light-2 px-4 py-1 rounded-2xl  text-primary text-xs xs:text-sm capitalize flex items-center gap-2">
      <p>{title}</p>
      <button type="button" onClick={onDelete.bind(null, index)}>
        <X className="size-5" />
      </button>
    </div>
  );
};

const initialValues = {
  name: "",
  projectLink: "",
  technologies: [],
};

const reducer = (state: any, action: any) => {
  if (typeof action.type !== "string") {
    console.error("Invalid action type!");
    return state;
  }

  if (action.type === "reset") {
    return initialValues;
  }

  return {
    ...state,
    [action.type]: action.value,
  };
};

const ProjectsModal: React.FC<Props> = ({
  open,
  setOpen,
  projects,
  setResume,
}) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const [technology, setTechnology] = useState("");

  const { name, projectLink, technologies } = state;

  const handleSubmit = () => {
    const filteredValues = Object.fromEntries(
      Object.entries(state).filter(
        ([_, value]) => value !== null && value !== ""
      )
    );

    setResume((prev: any) => ({
      ...prev,
      projects: [...projects, filteredValues],
    }));
    dispatch({ type: "reset" });
    setOpen(false);
  };

  const onDelete = (index: number) => {
    const existingTecs = [...technologies];

    const newTech = existingTecs.filter((_, i) => i !== index);

    dispatch({ type: "technologies", value: newTech });
  };

  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Add Projects">
      <div className="space-y-4">
        <Input
          placeholder="Enter your project name"
          label="Project Name"
          value={name}
          onChange={(e) => dispatch({ type: "name", value: e.target.value })}
        />
        <Input
          placeholder="Enter your project link"
          label="Project Link"
          value={projectLink}
          onChange={(e) =>
            dispatch({ type: "projectLink", value: e.target.value })
          }
        />
        <div>
          <Input
            placeholder="Example: React Js"
            label="Technology Used"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          />
          <div className="flex justify-between gap-2 mt-4">
            <div className="flex gap-2 flex-wrap">
              {technologies.length > 0 &&
                technologies.map((tech: string, i: number) => (
                  <TechstackBadge
                    key={i}
                    index={i}
                    title={tech}
                    onDelete={onDelete}
                  />
                ))}
            </div>
            <Button
              style={{ padding: 0, fontSize: "18px" }}
              variant="outline"
              className="!size-8 shrink-0"
              onClick={() => {
                dispatch({
                  type: "technologies",
                  value: [...technologies, technology],
                });
                setTechnology("");
              }}
            >
              +
            </Button>
          </div>
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Modal>
  );
};

export default ProjectsModal;
