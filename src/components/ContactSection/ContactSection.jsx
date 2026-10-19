import { useState } from "react";
import "./ContactSection.css";

const PROFILE = {
   name: "Aleksandr Iakovlev",
   role: "Frontend dev",
   status: "Open to offers",
   location: "Lugones",
   reply: "~24h",
};

const CHANNELS = [
   {
      id: "email",
      label: "EMAIL",
      hint: "write me",
      href: "mailto:alexjacob9606@gmail.com",
   },
   {
      id: "github",
      label: "GITHUB",
      hint: "code",
      href: "https://github.com/AlexJYad",
   },
   {
      id: "linkedin",
      label: "LINKEDIN",
      hint: "profile",
      href: "www.linkedin.com/in/aleksandr-j-iakovlev",
   },
   {
      id: "telegram",
      label: "TELEGRAM",
      hint: "fast reply",
      href: "https://t.me/Alex_Yad",
   },
   {
      id: "whatsapp",
      label: "WHATSAPP",
      hint: "chat",
      href: "https://wa.me/34637413918",
   },
];

function WindowBar({ title }) {
   return (
      <div className="contact-window-bar">
         <span>{title}</span>
         <span className="contact-window-controls">
            <i />
            <i />
            <i />
         </span>
      </div>
   );
}

const FORM_URL = "https://formspree.io/f/moejbbky";

function ContactSection({ language }) {
   const [form, setForm] = useState({ email: "", message: "", _gotcha: "" });
   const [status, setStatus] = useState("idle"); // idle | sending | success | error

   const handleChange = (e) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      if (status !== "idle" && status !== "sending") setStatus("idle");
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (status === "sending" || form._gotcha) return; // _gotcha = honeypot

      setStatus("sending");
      try {
         const res = await fetch(FORM_URL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify({ email: form.email, message: form.message }),
         });
         if (!res.ok) throw new Error(res.status);
         setForm({ email: "", message: "", _gotcha: "" });
         setStatus("success");
      } catch {
         setStatus("error");
      }
   };

   return (
      <div className="contact-section">
         <div className="contact-grid">
            <div className="contact-window">
               <WindowBar title="ID-CARD.EXE" />
               <div className="contact-window-body">
                  <h3 className="contact-name">{PROFILE.name}</h3>
                  <span className="contact-role">{PROFILE.role}</span>

                  <dl className="contact-info">
                     <div className="contact-info-row">
                        <dt>Status</dt>
                        <dd className="contact-status">{PROFILE.status}</dd>
                     </div>
                     <div className="contact-info-row">
                        <dt>Location</dt>
                        <dd>{PROFILE.location}</dd>
                     </div>
                     <div className="contact-info-row">
                        <dt>Replies in</dt>
                        <dd>{PROFILE.reply}</dd>
                     </div>
                  </dl>
               </div>
            </div>

            <form className="contact-window" onSubmit={handleSubmit}>
               <WindowBar title="MESSAGE.EXE" />
               <div className="contact-window-body">
                  <label className="contact-label" htmlFor="contact-email">
                     Email
                  </label>
                  <input
                     id="contact-email"
                     className="contact-field"
                     type="email"
                     name="email"
                     placeholder="name@company.com"
                     value={form.email}
                     onChange={handleChange}
                     required
                  />

                  <label className="contact-label" htmlFor="contact-message">
                     Message
                  </label>
                  <textarea
                     id="contact-message"
                     className="contact-field contact-field--area"
                     name="message"
                     placeholder="Tell me about your project"
                     value={form.message}
                     onChange={handleChange}
                     required
                  />

                  <input
                     type="text"
                     name="_gotcha"
                     value={form._gotcha}
                     onChange={handleChange}
                     tabIndex={-1}
                     autoComplete="off"
                     className="contact-honeypot"
                     aria-hidden="true"
                  />

                  <div className="contact-send-row">
                     <button
                        type="submit"
                        className="contact-btn contact-send"
                        disabled={status === "sending"}
                     >
                        {status === "sending" ? "SENDING..." : "SEND"}
                     </button>
                     <span
                        className={`contact-status-msg contact-status-msg--${status}`}
                        role="status"
                     >
                        {status === "success" && "Message sent!"}
                        {status === "error" &&
                           "Failed to send. Try email or Telegram."}
                     </span>
                  </div>
               </div>
            </form>
         </div>

         <div className="contact-slots">
            {CHANNELS.map((ch) => (
               <a
                  key={ch.id}
                  className="contact-btn contact-slot"
                  href={ch.href}
                  target="_blank"
                  rel="noreferrer"
               >
                  {ch.label}
                  <span className="contact-slot-hint">{ch.hint}</span>
               </a>
            ))}
         </div>
      </div>
   );
}

export default ContactSection;
