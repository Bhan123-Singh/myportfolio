const PHONE = "6392134295";
const EMAIL = "singhbhan029@gmail.com";

export default function Contact() {

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const form = e.target.form;
    const f = new FormData(form);

    const msg = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nMessage: ${f.get("message")}`;
    window.open(
      `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target.form;
    const f = new FormData(form);

    const subject = "Portfolio Contact Message";
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nMessage: ${f.get("message")}`;

    window.open(
      `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
  };

  return (
    <section id="contact" className="relative py-20 max-w-4xl mx-auto px-4 text-white">
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
        <h3 className="text-4xl font-bold text-cyan-400 text-center mb-8">Contact Me</h3>

        <form className="grid gap-4 max-w-xl mx-auto">
          <input name="name" required placeholder="Full Name" className="p-3 rounded-lg bg-black/60 border border-gray-700 text-white focus:border-cyan-400 outline-none" />
          <input name="email" required placeholder="Email Address" className="p-3 rounded-lg bg-black/60 border border-gray-700 text-white focus:border-cyan-400 outline-none" />
          <textarea name="message" rows="4" required placeholder="Your Message" className="p-3 rounded-lg bg-black/60 border border-gray-700 text-white focus:border-cyan-400 outline-none resize-none" />

          <div className="grid sm:grid-cols-2 gap-4 pt-2">

            <button
              onClick={sendWhatsApp}
              type="button"
              className="bg-green-600 hover:bg-green-500 py-3 rounded-xl font-medium transition-all hover:scale-[1.02] shadow-md"
            >
              Send via WhatsApp 💬
            </button>

            <button
              onClick={sendEmail}
              type="button"
              className="bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-medium transition-all hover:scale-[1.02] shadow-md"
            >
              Send via Email ✉️
            </button>

          </div>
        </form>
      </div>
    </section> 
  );
}
