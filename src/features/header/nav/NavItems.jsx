import React from "react";
import ChevronDown from "../../../components/icons/ChevronDown";
import { NavLink } from "react-router-dom";

export default function NavItems({ title, icon ,link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "text-zar flex gap-1 group" : "flex gap-1 group"
      }
    >
      {title}
      {icon && <ChevronDown></ChevronDown>}
    </NavLink>
  );
}
