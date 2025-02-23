import React from "react";
import Modal from "./Modal";
import Inbox from "../../dashboard/common/chats/Inbox";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      modalClass="[&>*:nth-child(2)]:p-0 [&>*:nth-child(1)]:hidden"
    >
      <Inbox />
    </Modal>
  );
};

export default ContactModal;
