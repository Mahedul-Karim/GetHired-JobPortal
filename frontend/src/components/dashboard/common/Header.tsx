import React from "react";
import Avatar from "../../ui/Avatar";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRequest } from "../../../hooks/useRequest";
import { useAlert } from "../../../hooks/useAlert";
import { setLogout } from "../../../store/slices/user";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  open: boolean;
  runAnimation: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRunAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({
  setOpen,
  setRunAnimation,
  open,
  runAnimation,
}) => {
  const { user } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const { success: onSuccess } = useAlert();

  const queryClient = useQueryClient();

  const { mutate } = useRequest({
    success: () => {
      queryClient.clear();
    },
    error: () => {},
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    const endpoint =
      user.accountType === "candidate" ? "user/logout" : "user/company";

    navigate("/", { replace: true });
    dispatch(setLogout());
    onSuccess("Logged out successfully!");
    mutate({
      endpoint,
      options: {
        method: "POST",
      },
    });
  };

  return (
    <header className="bg-white shadow-md h-[70px] flex items-center justify-between px-6">
      <div
        className="flex flex-col gap-2 shrink-0 justify-center size-8 cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
          setRunAnimation(true);
        }}
      >
        <span
          className={`h-[3px] w-[60%] bg-primary block rounded-md origin-center ${
            open
              ? "animate-[openTop_500ms_forwards]"
              : runAnimation && "animate-[closeTop_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] w-full bg-primary block rounded-md origin-center ${
            open
              ? "animate-[openMiddle_500ms_forwards]"
              : runAnimation && "animate-[closeMiddle_500ms_forwards]"
          }`}
        />
        <span
          className={`h-[3px] ml-auto w-[60%] bg-primary block rounded-md origin-center ${
            open
              ? "animate-[openBottom_500ms_forwards]"
              : runAnimation && "animate-[closeBottom_500ms_forwards]"
          }`}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <button className="text-primary" onClick={handleLogout}>
            <LogOut />
          </button>
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
