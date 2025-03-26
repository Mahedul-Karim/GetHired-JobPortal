import React, { useState } from "react";
import Modal from "../Modal";
import Input from "../../form/Input";
import Button from "../../button/Button";
import { useResume } from "../../../../hooks/useResume";
import { useAlert } from "../../../../hooks/useAlert";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setResume: any;
  haveResume: boolean;
}

const HeadlineEditor: React.FC<Props> = ({
  open,
  setOpen,
  setResume,
  haveResume
}) => {
  const [text, setText] = useState("");

  const { success: onSuccess, error: onError } = useAlert();

  const { mutate, isPending } = useResume({
    success: () => {
      setText("");
      onSuccess("Headline updated successfully!");
    },
    error: (err: any) => {
      onError(err);
    },
    setOpen,
  });

  const handleSubmit = () => {
    if (!haveResume) {
      setResume((prev: any) => ({ ...prev, headline: text }));
      setText("");
      setOpen(false);
      return;
    }

    const body = JSON.stringify({ headline: text });

    mutate({ body });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      handleSubmit();
    }
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
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSubmit} disabled={isPending}>
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default HeadlineEditor;
