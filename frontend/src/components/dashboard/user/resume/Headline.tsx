import React, { useState } from "react";
import Section from "../../common/Section";
import Heading from "../../common/Heading";
import { PencilRuler } from "lucide-react";
import HeadlineEditor from "../../../ui/modals/resume/HeadlineEditor";

const Headline = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Section>
        <div className="pb-2 border-b border-solid flex items-center justify-between">
          <Heading>Resume Headline</Heading>
          <div>
            <button onClick={() => setOpen(true)}>
              <PencilRuler className="size-5 text-primary" />
            </button>
          </div>
        </div>
        <h4 className="mt-4 text-gray-600">Web Developer and designer</h4>
      </Section>
      <HeadlineEditor open={open} setOpen={setOpen} />
    </>
  );
};

export default Headline;
