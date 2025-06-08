import { firstName, NavLinks } from "@/lib/constants";
import { TubeLightNavBar } from "./ui/tubelight-navbar";

const Navbar = () => {
  return <TubeLightNavBar items={NavLinks} firstName={firstName} />
}

export default Navbar;