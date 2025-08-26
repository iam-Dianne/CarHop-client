import { IoChatbubble, IoPaperPlane } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="min-h-screen sm:pt-[150px] pt-[100px] px-7 sm:px-20 lg:px-[100px] xl:px-[200px] 2xl:px-[450px] text-gray-900">
      <div className="text-center sm:px-[200px]">
        <h1 className="font-extrabold sm:text-3xl mb-2">Contact our team!</h1>
        Questions, concerns, or special requests? Our team is here for you 24/7!
        Whether you need help booking, want more details about our cars, or just
        need quick assistance, we’re always ready to help—anytime, anywhere.
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 mt-14 sm:px-[150px] 2xl:px-[70px]">
        <div className="col lg:w-3/5">
          <form className="flex flex-col gap-2">
            <div className="form-group flex gap-2">
              <input
                type="text"
                name="firstName"
                className="w-3/5 p-2 rounded-md border border-gray-900/20 bg-gray-50"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                className="w-2/5 p-2 rounded-md border border-gray-900/20 bg-gray-50"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded-md border border-gray-900/20 bg-gray-50"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <select
                name="subject"
                className="w-full p-2 rounded-md border border-gray-900/20 bg-gray-50"
                required
              >
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="pricing">Pricing & Packages</option>
                <option value="support">24/7 Support</option>
                <option value="feedback">Feedback & Suggestions</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Leave us a message"
                rows={8}
                cols={30}
                className="w-full p-2 rounded-md border border-gray-900/20 bg-gray-50"
              />
            </div>
          </form>
        </div>
        <div className="col lg:w-2/5">
          <h4 className="font-bold text-xl">Chat with us</h4>
          Speak to our friendly team via our live chat!
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-2 underline hover:text-primary">
              <IoChatbubble /> Start a live chat
            </li>
            <li className="flex items-center gap-2 underline hover:text-primary">
              <IoPaperPlane /> Send us an email
            </li>
            <li className="flex items-center gap-2 underline hover:text-primary">
              <RiTwitterXFill /> Message us on X
            </li>
          </ul>
          {/* call */}
          <h4 className="font-bold text-xl mt-8">Call us</h4>
          Call our team Mon-Fri from 8am to 5pm
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-2 underline hover:text-primary">
              <MdOutlineCall /> (+1) 999 1234
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
