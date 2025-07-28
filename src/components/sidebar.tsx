"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiCreditCard,
  FiRepeat,
  FiLink,
  FiBarChart2,
  FiDollarSign,
  FiShield,
  FiSettings,
  FiLogOut,
  FiDatabase,
} from "react-icons/fi";
import React from "react";

const navLinks = [
  { href: "/", label: "Home", icon: <FiHome size={18} /> },
  { href: "/banks", label: "My Banks", icon: <FiDatabase size={18} /> },
  { href: "/transactions", label: "Transaction History", icon: <FiRepeat size={18} /> },
  { href: "/transfer", label: "Payment Transfer", icon: <FiCreditCard size={18} /> },
  { href: "/connect-bank", label: "Connect Bank", icon: <FiLink size={18} /> },
  { href: "/loan-status", label: "Check Loan Status", icon: <FiBarChart2 size={18} /> },
  { href: "/get-loan", label: "Get a Loan", icon: <FiDollarSign size={18} /> },
  { href: "/kyc", label: "Verification / KYC", icon: <FiShield size={18} /> },
  { href: "/settings", label: "Settings", icon: <FiSettings size={18} /> },
  { href: "/logout", label: "Logout", icon: <FiLogOut size={18} /> },
];

const themeBlue = "#2193b0";
const themeHover = "#e3e8ff";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      style={{
        minWidth: 220,
        background: "#fff",
        color: "#222",
        borderRight: "1px solid #eee",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 32 }}>
        <span style={{ color: themeBlue }}>Vertex</span> Bank
      </div>
      <nav style={{ flex: 1 }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} style={{ marginBottom: 6 }}>
                <Link
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                    color: isActive ? themeBlue : "#222",
                    fontWeight: isActive ? 600 : 500,
                    fontSize: 15,
                    padding: "0.45rem 0.75rem",
                    borderRadius: 6,
                    background: isActive ? themeHover : "transparent",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.background = themeHover;
                    (e.currentTarget as HTMLElement).style.color = themeBlue;
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.background = isActive ? themeHover : "transparent";
                    (e.currentTarget as HTMLElement).style.color = isActive ? themeBlue : "#222";
                  }}
                >
                  <span style={{ color: isActive ? themeBlue : "#8a8fa3" }}>{link.icon}</span>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div style={{ marginTop: "auto", fontSize: 14, color: "#8a8fa3" }}>
        <div style={{ fontWeight: 600 }}>Adrian Hajdin</div>
        <div>adrian@jsmastery.pro</div>
      </div>
    </aside>
  );
};

export default Sidebar;
