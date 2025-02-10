import React, { useState } from "react";
import Modal from "./Modal";

import { UserRound,ReceiptText,AtSign } from "lucide-react";
import Input from "../form/Input";
import TextArea from "../form/TextArea";
import Upload from "../form/Upload";
import Button from "../button/Button";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const JobApplyModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen} modalTitle="Apply for this job">
      <form onSubmit={(e) => e.preventDefault()} className="px-2 xs:px-4 pb-5 space-y-6">
        <Input
          placeholder="Enter Your Name"
          label="Your Name"
          Icon={UserRound}
          type="text"
        />
        <Input
          placeholder="Enter your email"
          label="Your Name"
          Icon={AtSign}
          type="text"
        />
        <TextArea
          placeholder="Write briefly about yourself"
          label="About Yourself"
          Icon={ReceiptText}
        />
        <Upload label="Upload Resume" fileId={'resume'} uploadType="pdf"/>
        <Button>Apply Now</Button>
      </form>
    </Modal>
  );
};

export default JobApplyModal;
