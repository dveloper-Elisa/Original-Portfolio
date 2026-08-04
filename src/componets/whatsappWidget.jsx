import { useState } from "react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const chatUrl = `https://wa.me/250787647168?text=${encodeURIComponent(message || "Hello Elisa, I would like to discuss a project.")}`;

  return (
    <aside className={`whatsapp-widget ${open ? "is-open" : ""}`} aria-label="WhatsApp contact">
      {open && <div className="whatsapp-panel">
        <div className="whatsapp-panel-head"><div><i className="fa fa-whatsapp" /><span><strong>Elisa Kwizera</strong><small>Usually replies quickly</small></span></div><button onClick={() => setOpen(false)} aria-label="Close WhatsApp chat"><i className="fa fa-times" /></button></div>
        <div className="whatsapp-panel-body"><p>Hi there! 👋<br />How can I help with your project?</p></div>
        <div className="whatsapp-panel-compose"><textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Type your message…" aria-label="Your WhatsApp message" rows="2" /><a href={chatUrl} target="_blank" rel="noreferrer" aria-label="Send message on WhatsApp"><i className="fa fa-paper-plane" /></a></div>
      </div>}
      <button className="whatsapp-fab" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open WhatsApp chat"><i className={`fa ${open ? "fa-times" : "fa-whatsapp"}`} /></button>
    </aside>
  );
};

export default WhatsAppWidget;
