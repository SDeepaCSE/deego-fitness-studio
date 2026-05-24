import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    // 📩 Admin Email
    const adminEmail = emailjs.send(
      "service_1rh7yne",
      "template_fbcco49",
      templateParams,
      "yyPdGh8xgbMoE4BkV"
    );

    // 🤖 Auto Reply Email
    const autoReply = emailjs.send(
      "service_1rh7yne",
      "template_n5dknfn",
      templateParams,
      "yyPdGh8xgbMoE4BkV"
    );

    Promise.all([adminEmail, autoReply])
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus("❌ Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Contact Deego Fitness 💪
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 mb-3 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center mt-3 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;