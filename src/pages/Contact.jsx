export default function Contact() {
  return (
    <>
      <div className="flex justify-center items-center py-12 bg-lilac">
        <div className=" bg-lilac rounded-lg p-8 w-1/3">
        <h2 className="text-3xl font-bold text-lilac text-center">Send an Email!</h2>
        <div className=" mt-8 w-1/3 text-1xl">
          <div className="flex flex-col gap-6 m-4">
            <label className="block mt-4 mb-4">
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
            <label className="mt-4 pb-4">
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
