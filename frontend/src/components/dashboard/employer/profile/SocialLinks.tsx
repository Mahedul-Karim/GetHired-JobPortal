import React from 'react'

import Input from "../../../ui/form/Input";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Button from "../../../ui/button/Button";

const SocialLinks = () => {
  return (
    <div className="mt-4">
      <form className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Facebook" Icon={Facebook} />
          <Input placeholder="Twitter" Icon={Twitter} />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Whatsapp" Icon={Instagram} />
          <Input placeholder="Linkedin" Icon={Linkedin} />
        </div>
        <Button>Save Changes</Button>
      </form>
    </div>
  );
};

export default SocialLinks;