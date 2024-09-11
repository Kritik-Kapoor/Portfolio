import "./modal.css";
import {
  CopyClipBoardIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TickIcon,
} from "../../Icons";
import { CopyToClipboard } from "../../utils/CopyToClipboard";
import { useState } from "react";

const ContactModal = ({ open, onClose }) => {
  const [copiedValue, setCopiedValue] = useState("");

  if (!open) {
    return null;
  }

  const handleClose = () => {
    setCopiedValue("");
    onClose();
  };

  return (
    <div
      className={`overlay ${open ? "visible" : "invisible"}`}
      onClick={handleClose}
    >
      <div
        className="modal-container w-10/12 sm:w-8/12 md:w-4/12 h-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3 p-2 bg-[#000020] rounded-md">
          <div className="flex items-center gap-x-3">
            <LinkedInIcon />
            <p className="sm:hidden">LinkedIn</p>
            <p className="hidden sm:block">
              https://www.linkedin.com/in/kritik-kapoor/
            </p>
          </div>
          {copiedValue === "linkedin" ? (
            <TickIcon />
          ) : (
            <CopyClipBoardIcon
              onClick={() => {
                CopyToClipboard("https://www.linkedin.com/in/kritik-kapoor/");
                setCopiedValue("linkedin");
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-between mb-3 p-2 bg-[#000020] rounded-md">
          <div className="flex items-center gap-x-3">
            <MailIcon />
            <p className="sm:hidden">Mail</p>
            <p className="hidden sm:block">kritik0401@gmail.com</p>
          </div>
          {copiedValue === "mail" ? (
            <TickIcon />
          ) : (
            <CopyClipBoardIcon
              onClick={() => {
                CopyToClipboard("kritik0401@gmail.com");
                setCopiedValue("mail");
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-between p-2 bg-[#000020] rounded-md">
          <div className="flex items-center gap-x-3">
            <GitHubIcon />
            <p className="sm:hidden">GitHub</p>
            <p className="hidden sm:block">https://github.com/Kritik-Kapoor</p>
          </div>
          {copiedValue === "github" ? (
            <TickIcon />
          ) : (
            <CopyClipBoardIcon
              onClick={() => {
                CopyToClipboard("https://github.com/Kritik-Kapoor");
                setCopiedValue("github");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
