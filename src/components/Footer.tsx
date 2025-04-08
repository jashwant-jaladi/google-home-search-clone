import { useState } from "react";
import { FooterContainer } from "../styles/Footer.styles";
import { IoMdHome } from "react-icons/io";
import { FooterIconButton } from "../styles/Footer.styles";
import { IoIosNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsClockHistory } from "react-icons/bs";

const Footer = () => {
  const [active, setActive] = useState("home");

  return (
    <FooterContainer>
      <FooterIconButton
        isActive={active === "home"}
        onClick={() => setActive("home")}
      >
        <IoMdHome
          size={30}
          color={active === "home" ? "#5EB5D5" : "rgb(102, 104, 107)"}
        />
      </FooterIconButton>

      <FooterIconButton
        isActive={active === "explore"}
        onClick={() => setActive("explore")}
      >
        <BsClockHistory
          size={30}
          color={active === "explore" ? "#5EB5D5" : "rgb(102, 104, 107)"}
        />
      </FooterIconButton>

      <FooterIconButton
        isActive={active === "notifications"}
        onClick={() => setActive("notifications")}
      >
        <IoIosNotifications
          size={30}
          color={active === "notifications" ? "#5EB5D5" : "rgb(102, 104, 107)"}
        />
      </FooterIconButton>

      <FooterIconButton
        isActive={active === "menu"}
        onClick={() => setActive("menu")}
      >
        <GiHamburgerMenu
          size={30}
          color={active === "menu" ? "#5EB5D5" : "rgb(102, 104, 107)"}
        />
      </FooterIconButton>
    </FooterContainer>
  );
};

export default Footer;
