import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [active, setActive] = useState("home");

  // EmailJS
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  emailjs.init("yyPdGh8xgbMoE4BkV");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
      name: form.current.firstname.value + " " + form.current.lastname.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs.send("service_1rh7yne", "template_fbcco49", templateParams);
    emailjs.send("service_1rh7yne", "template_n5dknfn", templateParams);

    setStatus("✅ Message sent successfully!");
    form.current.reset();
    setLoading(false);
  };

  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1200&auto=format&fit=crop"
  ];

  const btnStyle = (name) =>
    `hover:text-green-400 transition ${
      active === name ? "text-green-400 font-bold" : ""
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">

      {/* NAVBAR */}
      <header className="flex justify-between items-center p-4 bg-gradient-to-r from-black to-gray-900 text-white shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          DEEGO FITNESS STUDIO
        </h1>

        <nav className="space-x-4 text-sm md:text-base">
          <button onClick={() => setActive("home")} className={btnStyle("home")}>
            Home
          </button>

          <button onClick={() => setActive("about")} className={btnStyle("about")}>
            About Us
          </button>

          <button onClick={() => setActive("gallery")} className={btnStyle("gallery")}>
            Pictures
          </button>

          <button onClick={() => setActive("contact")} className={btnStyle("contact")}>
            Contact
          </button>
        </nav>
      </header>

      {/* HOME */}
      {active === "home" && (
        <div>

          <section className="relative">
            <img
              src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1400&auto=format&fit=crop"
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute top-16 md:top-24 left-5 md:left-10 text-white bg-black/60 p-5 rounded-2xl max-w-2xl backdrop-blur-sm">

              <p>
                Deego Fitness Studio is one of the best Gym in T.Nagar. It is a unisex gym with experienced trainers and modern equipment.
              </p>

              <p className="mt-4">
                We provide weight loss, weight gain and strength training programs tailored for you.
              </p>

            </div>
          </section>

          {/* PRICING */}
          <section className="p-10 bg-gradient-to-br from-gray-100 to-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8">
              Pricing & Packages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                ["Monthly", "2500"],
                ["Quarterly", "5000"],
                ["Half Yearly", "7000"],
                ["Annual", "9000"]
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-xl text-center border-t-4 border-green-500 hover:scale-105 transition"
                >
                  <h3 className="text-xl font-bold">{item[0]}</h3>

                  <p className="text-3xl font-bold text-green-600 mt-2">
                    ₹{item[1]}
                  </p>

                  <ul className="text-sm mt-4 space-y-1">
                    <li>Cardio</li>
                    <li>Strength Training</li>
                    <li>Weight Gain</li>
                    <li>Weight Loss</li>
                  </ul>

                  <button
                    onClick={() => setActive("contact")}
                    className="mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
                  >
                    Join Now
                  </button>
                </div>
              ))}

            </div>
          </section>

        </div>
      )}

      {/* ABOUT */}
      {active === "about" && (
        <section className="p-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">

          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1200&auto=format&fit=crop"
            className="w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-md hover:scale-105 transition"
          />

          <div className="md:w-1/3 text-center bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>

            <p>
              Deego Fitness Studio is one of the best Gyms in T.nagar. We help you to achieve your fitness goals naturally.
            </p>

            <p className="mt-4">
              We have latest weight training machines and knowledgeable trainers. Our customized training programmes helps you achieve your goals.
            </p>

            <p className="mt-4 font-semibold text-green-600">
              Six pack. Best gym in T.nagar
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop"
            className="w-full md:w-1/3 h-80 object-cover rounded-2xl shadow-md hover:scale-105 transition"
          />

        </section>
      )}

      {/* GALLERY */}
      {active === "gallery" && (
        <section className="p-10">

          <h2 className="text-3xl font-bold text-center mb-6">
            Experience the Power of Transformation at Deego Fitness Studio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-2xl shadow-lg h-72 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>

        </section>
      )}

      {/* CONTACT */}
      {active === "contact" && (
        <section className="p-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p>📍 T. Nagar, Chennai</p>
            <p>📞 6381114253</p>
            <p>📧 fitnessdeego@gmail.com</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg space-y-3">

            <form ref={form} onSubmit={sendEmail} className="space-y-3">

              <div className="grid grid-cols-2 gap-3">
                <input name="firstname" className="p-2 border rounded" placeholder="First Name" required />
                <input name="lastname" className="p-2 border rounded" placeholder="Last Name" required />
              </div>

              <input name="email" className="w-full p-2 border rounded" placeholder="Email" required />

              <textarea name="message" className="w-full p-2 border rounded" placeholder="Message" rows="4" required />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {status && (
                <p className="text-center font-medium">{status}</p>
              )}

            </form>

          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="text-center p-4 bg-black text-white mt-10">
        © 2026 Deego Fitness Studio
      </footer>

    </div>
  );
}