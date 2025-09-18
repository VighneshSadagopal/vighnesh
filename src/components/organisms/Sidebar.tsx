"use client";
import { useEffect } from "react";
import { MailOutline } from "react-ionicons";
import { CalendarOutline } from "react-ionicons";
import { PhonePortraitOutline } from "react-ionicons";
import { LocationOutline } from "react-ionicons";
import { LogoTwitter } from "react-ionicons";
import { LogoInstagram } from "react-ionicons";
import { ChevronDownOutline } from "react-ionicons";
import { LogoLinkedin } from 'react-ionicons'

export default function Sidebar() {
  const elementToggleFunc = (element: HTMLElement) => {
    element.classList.toggle("active");
  };

  useEffect(() => {
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    const sidebar = document.querySelector("[data-sidebar]") as HTMLElement;

    sidebarBtn?.addEventListener("click", () => {
      elementToggleFunc(sidebar);
    });

    // Cleanup event listener
    return () => {
      sidebarBtn?.removeEventListener("click", () => {
        elementToggleFunc(sidebar);
      });
    };
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/my-avatar.png" alt="Vighnesh Sadagopal" width={80} />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Vighnesh Sadagopal">
            Vighnesh Sadagopal
          </h1>
          <p className="title">DevWizard</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <ChevronDownOutline
            color={"#ffda6b"}
            title={"cheveronDown"}
            height="20px"
            width="20px"
          />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline
                color={"#ffdb70"}
                title={"Mail Icon"}
                width="20px"
                height="20px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:vighneshp65@gmail.com" className="contact-link">
                vighneshp65@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhonePortraitOutline
                color={"#ffdb70"}
                title={"Phone Icon"}
                height="20px"
                width="20px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917709754261" className="contact-link">
                +91 7709754261
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarOutline
                color={"#ffdb70"}
                title={"Calendar Icon"}
                height="20px"
                width="20px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2000-04-18">April 18, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOutline
                color={"#ffdb70"}
                title={"Location Icon"}
                height="20px"
                width="20px"
              />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Pune, India</address>
            </div>
          </li>
        </ul>

              <div className="separator"></div>
    
              <ul className="social-list">
                <li className="social-item">
                  <a href="https://www.linkedin.com/in/vighnesh-sadagopal/" className="social-link">
                  <LogoLinkedin
                    color={'#d6d6d6'} 
                    title={'linkedin icon'}
                    height="20px"
                    width="20px"
                  />
                    </a>
                </li>
                <li className="social-item">
                  <a href="https://x.com/_vighnesh_vs" className="social-link">
                  <LogoTwitter
                    color={'#d6d6d6'} 
                    title={'x'}
                    height="20px"
                    width="20px"
                  />
                    </a>
                </li>
                <li className="social-item">
                  <a href="https://www.instagram.com/vighnesh__.p/" className="social-link">
                  <LogoInstagram
                    color={'#d6d6d6'} 
                    title={'instagram icon'}
                    height="20px"
                    width="20px"
                  />
                    </a>
                </li>
              </ul>
      </div>
    </aside>
  );
}
