import React from "react";
import Button from "../ui/button/Button";
import { Clock } from 'lucide-react';

const Card = () => {
  return (
    <div className="bg-white border border-solid rounded-md p-3 mb-5 max-w-[270px]">
      <div>
        <div>
            <p>
                <Clock />
            </p>
        </div>
        <Button className="bg-primary-light-2 !text-primary">Hello</Button>
      </div>
    </div>
  );
};

export default Card;
