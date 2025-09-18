"use client";

import React, { useState } from "react";
import "./style.css";

import Sidebar from "@/components/organisms/Sidebar";
import Resume from "@/components/pages/Resume";
import About from "@/components/pages/About";
import Blogs from "@/components/pages/Blogs";
import Gallery from "@/components/pages/Gallery";
import Links from "@/components/pages/Links";

export default function Page() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main>
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* NAVBAR */}
        <nav className="navbar">
          <ul className="navbar-list">
            {[
              { id: "about", label: "About" },
              { id: "resume", label: "Resume" },
              { id: "blog", label: "Thoughts & Talks" },
              { id: "gallery", label: "Gallery" },
              { id: "contact", label: "Contact" },
            ].map((tab) => (
              <li key={tab.id} className="navbar-item">
                <button
                  className={`navbar-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Conditional rendering of content based on activeTab */}
        {activeTab === "about" && <About />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "blog" && <Blogs />}
        {activeTab === "gallery" && <Gallery />}
        {activeTab === "contact" && <Links />}
      </div>
    </main>
  );
}
