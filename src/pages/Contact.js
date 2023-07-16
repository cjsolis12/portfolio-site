import React from "react";

export default function Contact() {
  return (
    <div class="container mx-auto my-20 w-1/3 border border-aqua bg-white bg-opacity-10 rounded-lg backdrop-blur-lg shadow-lg ">
  <div class="p-5 space-y-5 shadow-xl">
    <h4 class="text-center text-3xl"></h4>

    <form>
      <div class="grid grid-cols-2 gap-5">
        <input
          type="text"
          class="border border-light-blue px-4 py-2 focus:outline-none focus:border-purple"
          placeholder="First Name"
        />
        <input
          type="text"
          class="border border-light-blue px-4 py-2 focus:outline-none focus:border-purple"
          placeholder="Last Name"
        />
        <input
          type="email"
          class="border border-light-blue px-4 py-2 focus:outline-none focus:border-purple col-span-2"
          placeholder="Email"
        />
        <textarea
          cols="10"
          rows="5"
          class="border border-light-blue px-4 py-2 focus:outline-none focus:border-purple col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        value="Send Message"
        class="focus:outline-none mt-5 bg-purple px-4 py-2 text-white font-bold "
      />
    </form>
  </div>
</div>
  );
}
