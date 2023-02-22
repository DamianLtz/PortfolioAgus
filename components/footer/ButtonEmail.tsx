import { useState } from "react";
import ButtonEmailInitial from "./ButtonEmailInitial";
import ButtonEmailClicked from "./ButtonEmailClicked";
import { AnimatePresence, motion } from "framer-motion";

const ButtonEmail = () => {
  const [emailClicked, setEmailClicked] = useState(false);

  const changeEmailButton = () => {
    setEmailClicked(true);
    navigator.clipboard.writeText("agustinfrancoietta@gmail.com");
    setTimeout(() => {
      setEmailClicked(false);
    }, 3500);
  };

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {!emailClicked ? (
        <motion.div
          key={"ButtonEmailInitial"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => changeEmailButton()}>
          <ButtonEmailInitial />
        </motion.div>
      ) : (
        <motion.div
          key={"ButtonEmailClicked"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}>
          <ButtonEmailClicked />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ButtonEmail;
