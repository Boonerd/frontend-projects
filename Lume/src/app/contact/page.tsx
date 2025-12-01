export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-black text-center mb-12">Let us Plan Your Dream Event</h1>
        
        <form className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 space-y-6">
          <input placeholder="Your Name" className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition" />
          <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition" />
          <input type="tel" placeholder="Phone (e.g. 07XX XXX XXX)" className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition" />
          <textarea placeholder="Tell us about your event..." rows={5} className="w-full px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 outline-none transition resize-none" />
          <button className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-5 rounded-xl text-xl font-bold transition transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}