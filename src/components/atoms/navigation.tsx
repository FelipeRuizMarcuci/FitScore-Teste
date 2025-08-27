import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

interface SubmenuItem {
  label: string;
  href: string;
}

interface NavigationProps {
  submenuItems?: SubmenuItem[];
  href?: string;
  children?: React.ReactNode;
}

const NavigationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SubmenuBox = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 150px;
  z-index: 50;
`;

const SubmenuItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 8px 12px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const Navigation: React.FC<NavigationProps> = ({
  children,
  submenuItems,
  href,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <NavigationContainer
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? <Link href={href}>{children}</Link> : <span>{children}</span>}

      {submenuItems && submenuItems.length > 0 && (
        <SubmenuBox open={open}>
          <SubmenuItems>
            {submenuItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </SubmenuItems>
        </SubmenuBox>
      )}
    </NavigationContainer>
  );
};

export { Navigation };
