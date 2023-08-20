export default function Contact() {
  return (
    <>
      <div className="w-full md:w-96 p-2 md: mx-50">
        <div className="flex flex-col p-8 border border-lilac">
          <form method="POST" action="">
            <label className="block mb-6">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Name"
              />
            </label>
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Send me a message!"
              ></textarea>
            </label>
            <div className="mb-6">
              <button
                type="submit"
                className="btn bg-lilac text-charcoal w-3 h-2"
              >
                Contact Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
