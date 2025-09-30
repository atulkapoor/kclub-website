"use client";
import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  choice: string;
  message: string;
  terms: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    choice: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // validate + submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // let newErrors: FormErrors = {};
    const newErrors: FormErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.topic) newErrors.topic = "Please select a topic";
    if (!formData.choice) newErrors.choice = "Please select one option";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";

    setErrors(newErrors);

    // If no errors → console log values
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted ✅:", formData);
    }
    };
    const logos = [
        { src: "/relume-logo.png", alt: "Webflow" },
        { src: "/webflow-logo.png", alt: "Relume" },
        { src: "/relume-logo.png", alt: "Webflow" },
        { src: "/webflow-logo.png", alt: "Relume" },
        { src: "/relume-logo.png", alt: "Webflow" },
        { src: "/webflow-logo.png", alt: "Relume" },
    ];
    const offices = [
      {
        country: "KSA",
        address: "Al Sulaimania, Riyadh, Saudi Arabia",
        mapLink: "#",
      },
      {
        country: "UAE",
        address: "Business Bay, Dubai, UAE",
        mapLink: "#",
      },
      {
        country: "India",
        address: "Oberoi Springs, Andheri West, Mumbai, India",
        mapLink: "#",
      },
    ];
  
  
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50  mx-auto px-4 md:px-6 lg:px-36 py-12 lg:py-4 mt-20">


      <div className="w-full flex flex-col items-center py-12">
        {/* Title + Description */}
        <div className="max-w-4xl text-center mb-10">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
        Connect With Us to Begin {/* <br /> */}Your Digital Journey
          </h1>
          <p className="text-gray-600 text-sm">
            Have a project in mind or curious about how Kitcub can help your business grow? 
            Our team is here to answer your questions, explore your ideas, and guide you toward the right solutions.
          </p>
        </div>
  
        {/* Image Placeholder */}
        <div className=" w-full h-[400px] flex items-center justify-center rounded-md">
        <div className="text-center">
         {/*  <div className="w-14 h-14 mx-auto bg-gray-300 rounded-md mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4-4 4 4m4-4l4 4M4 8h16"
              />
            </svg> 
          </div>*/}
                <img
            src="contact-img/hero.png"  
            className="w-full h-[400px] object-cover"
          />
          {/* <h2 className="text-lg font-semibold">Contact Us Page</h2> */}
        </div>
      </div>
            </div>  

         
    <div className="w-full flex justify-center py-8">
    <section className="bg-[#f2f5ff] py-12 mr-8">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-2 text-black">Our Offices</h2>
        <p className="text-black mb-8">
          Our global presence allows us to serve businesses across regions with local expertise.
        </p>

        <div className="space-y-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className={`pl-4 ${index === 0 ? "border-l-2 border-gray-400" : ""}`}
            >
              <h3 className="font-bold text-lg text-black">{office.country}</h3>
              <p className="text-black">{office.address}</p>
              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-semibold text-sm text-black hover:text-gray-700"
              >
                View Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
          <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-10">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight subpixel-antialiased text-black">
            Let’s Start the Conversation
          </h1>
          <p className="text-gray-600 mt-2">
            The first steps towards transformation begin with a simple hello.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Choose a topic
            </label>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select one…</option>
              <option>Support</option>
              <option>Sales</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
            {errors.topic && (
              <p className="text-red-500 text-sm">{errors.topic}</p>
            )}
          </div>

          {/* Radio Buttons */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Which best describes you?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "First choice",
                "Second choice",
                "Third choice",
                "Fourth choice",
                "Fifth choice",
                "Other",
              ].map((option, i) => (
                <label key={i} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="choice"
                    value={option}
                    checked={formData.choice === option}
                    onChange={handleChange}
                    className="h-4 w-4 text-black"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
            {errors.choice && (
              <p className="text-red-500 text-sm">{errors.choice}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
            //   rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Type your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-black"
            />
            <label className="ml-2 text-sm text-gray-700">
              I accept the Terms
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1a3eec] text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
          </div>  
    {/* <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading 
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm text-black uppercase tracking-wide">
            Our offices
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Locations</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Locations + Map  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-xl overflow-hidden shadow">
          {/* Left - Offices  
          <div className="p-6 space-y-6">
            {/* Sydney  
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sydney</h3>
              <p className="text-gray-600 text-sm">
                123 Sample St, Sydney NSW 2000 AU
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-blue-600 hover:underline text-sm"
              >
                View Map
              </a>
            </div>

            {/* New York  
            <div>
              <h3 className="text-lg font-semibold text-gray-900">New York</h3>
              <p className="text-gray-600 text-sm">
                123 Sample St, New York NY 10003 USA
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-blue-600 hover:underline text-sm"
              >
                View Map
              </a>
            </div>

            {/* London  
            <div>
              <h3 className="text-lg font-semibold text-gray-900">London</h3>
              <p className="text-gray-600 text-sm">
                123 Sample St, London W1C 1DE, United Kingdom
              </p>
              <a
                href="#"
                className="mt-2 inline-block text-blue-600 hover:underline text-sm"
              >
                View Map
              </a>
            </div>
          </div>

          {/* Right - Map Placeholder 
          <div className="flex items-center justify-center bg-gray-200">
            <svg
              className="w-24 h-24 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 
              0-2.5-1.12-2.5-2.5s1.12-2.5 
              2.5-2.5 2.5 1.12 2.5 2.5S13.38 
              11.5 12 11.5z" />
            </svg>
          </div>
        </div>
      </div>
          </section>  */}
        <section className="text-white flex justify-between mt-20 py-12 lg:py-14  rounded-md">
          <div className="w-xl">
            <p  className="font-bold text-black">Trusted by the world&apos;s best companies</p>
          </div>
     <div className="overflow-hidden whitespace-nowrap w-full bg-white">
      <div className="flex animate-scroll">
        {logos.map((logo, i) => (
          <div
            key={i}
            className="flex items-center mx-8 shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
            {/* <span className="text-black font-medium">{logo.alt}</span> */}
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {logos.map((logo, i) => (
          <div
            key={`dup-${i}`}
            className="flex items-center mx-8 shrink-0"
          >
            <img src={logo.src} alt={logo.alt} className="h-8 mr-2" />
            {/* <span className="text-black font-medium">{logo.alt}</span> */}
          </div>
        ))}
      </div>
    </div>
    </section>



        </main>
            
    );
  }
  