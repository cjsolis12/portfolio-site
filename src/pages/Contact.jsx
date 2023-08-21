export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center py-12 ">
        <div className=" bg-white border rounded-lg shadow-lg p-8 w-1/3">
        <h2 className="text-2xl font-bold text-lilac">Send an Email!</h2>
        <div className="mt-8 w-1/3">
          <div className="grid grid-cols-1 gap-6">
            <label className="block mt-4">
              <span className="text-lilac">Full name</span>
              <input
                type="text"
                className="
                    mt-1
                    w-full
                    block
                    rounded
                    border-gray-300
             
                    focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder=""
              />
            </label>
            <label className="mt-4">
              <span className="text-lilac">Email address</span>
              <input
                type="email"
                className="
                    mt-1
                    block
                    w-full
                    border-gray-300
                    focus:border-lilac focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="john@example.com"
              />
            </label>
            <label className="mt-4">
              <span className="text-lilac">Message</span>
              <textarea
                className="
                    mt-1
                    block
                    border-gray-300
                    w-full
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                rows="3"
              ></textarea>
            </label>
            <button className="mt-4">Send</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
