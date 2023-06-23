import { useState } from "react";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import Logo from "../Logo/Logo";
import MenuToggle from "../MenuToggle/MenuToggle";
import MenuLinks from "../MenuLinks/MenuLinks";

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.100", "primary.100"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;
