import { useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { Mail, MapPin, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { db } from "../firebase"; 
import { setDoc, doc, serverTimestamp } from "firebase/firestore"; 
import toast, { Toaster } from 'react-hot-toast'; 
import emailjs from '@emailjs/browser';

import "../styles/contact.css";
import "../styles/globals.css";

export default function Contact() {
  const form = useRef();
  // const recaptchaRef = useRef();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [captchaToken, setCaptchaToken] = useState(null); // 3. State for token

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("gramrutha1612@gmail.com");
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending message...");

    try {
      const formData = new FormData(form.current);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      const customId = `${name}_${Date.now()}`;

      // 1. DATA OBJECT FOR FIREBASE & EMAILJS
      const data = {
        a_name: name,
        b_email: email,
        c_subject: subject,
        d_message: message,
        e_timestamp: serverTimestamp(),
        time: new Date().toLocaleString(), // For the email templates
      };

      // 2. SAVE TO FIREBASE
      await setDoc(doc(db, "portfolio_messages", customId), data);

      // 3. SEND TO YOU (Primary Template)
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE, // Your main contact template
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      // 4. SEND TO SENDER (Auto-Reply Template)
      // Make sure to add VITE_EMAIL_AUTO_REPLY_TEMPLATE to your .env file
      if (import.meta.env.VITE_EMAIL_AUTO_REPLY_TEMPLATE) {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE,
          import.meta.env.VITE_EMAIL_AUTO_REPLY_TEMPLATE,
          {
            name: name,
            email: email,
            subject: subject,
            message: message,
            time: data.time
          },
          import.meta.env.VITE_EMAIL_PUBLIC
        );
      }

      toast.dismiss(loadingToast);
      toast.success("Message sent successfully! 🚀");
      e.target.reset();

    } catch (error) {
      console.error("Error:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact">
      <Toaster position="bottom-right" reverseOrder={false} />

      <section className="contact-hero container">
        <span className="badge">Contact</span>
        <h1 className="contact-title">Building a product that needs clarity?</h1>
        <p className="contact-intro">
          Whether you're designing a SaaS platform, dashboard, or workflow-driven system, 
          I’d love to collaborate and bring structure to your product.
        </p>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          
          <div className="contact-info">
            <div className="info-card glass">
              <h3>Email</h3>
              <div className="email-wrapper" onClick={handleCopyEmail}>
                <Mail size={20} className="icon" />
                <span>gramrutha1612@gmail.com</span>
                {copied ? <Check size={16} className="copy-icon success" /> : <Copy size={16} className="copy-icon" />}
              </div>
            </div>

            <div className="info-card glass">
              <h3>Location</h3>
              <div className="location-wrapper">
                <MapPin size={20} className="icon" />
                <span>Bengaluru, India</span>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect</h3>
              <div className="social-list">
                <a href="https://www.linkedin.com/in/gr-amrutha/" target="_blank" rel="noreferrer" className="social-item">
                  <Linkedin size={20} /> LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="contact-form glass">
            <div className="form-group">
              <label htmlFor="name">Name <span style={{color:"red"}}>*</span></label>
              <input type="text" id="name" name="name" placeholder="What's your name?" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span style={{color:"red"}}>*</span></label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project inquiry..." />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message <span style={{color:"red"}}>*</span></label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>

            <div className="form-actions">
              <button 
                className="button-primary"
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: "#2563eb",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "9999px",
                  display: "block",
                  margin: "0 auto",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1
                }}
              >
                <b>{loading ? "Sending..." : "Send Message"}</b>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}