import { MapPin } from "lucide-react";
import React, { useState } from "react";

import styles from "./Header.module.css";
import Button from "../../../../../components/ui/button/Button";
import ContactModal from "../../../../../components/ui/modals/ContactModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={`${styles["user-details-header"]} rounded-lg px-4 py-8`}
      >
        <section className="flex flex-col items-center gap-3">
          <div>
            <img
              src="https://thewebmax.org/jobzilla/images/candidates/pic2.jpg"
              alt=""
              className="size-24 object-cover rounded-lg"
            />
          </div>
          <p className="text-lg font-medium text-dark-2">Wanda Montgomery</p>
          <p className="flex items-center gap-2 text-sm text-gray-1">
            <MapPin className="size-4" /> United States{" "}
          </p>
        </section>
        <section className="mt-6 flex items-center flex-col xs:flex-row gap-4 justify-between">
          <div className="w-full xs:w-auto">
            <Button variant="outline" onClick={() => setOpen(true)}>
              Contact Me
            </Button>
          </div>
          <div className="w-full xs:w-auto">
            <Button>Download CV</Button>
          </div>
        </section>
      </header>
      <ContactModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
