import InputField from "@/components/Contact/LabeledInput"

export default function Contact() {
  return (
    <>
      <div
        className=" relative mx-auto w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-7xl mt-72"
        id="contact"
      >
        <h2 className="flex z-0 justify-center mb-5 text-3xl font-medium">
          Contact
        </h2>
        <InputField type="email" name="Email" />
        <InputField type="text" name="Name" />
        <InputField type="text" name="Message" />
        <input
          type="submit"
          className="absolute inset-x-0 mx-32
          bg-blue-500 py-1 px-3 rounded-md text-white"
        />
      </div>
    </>
  )
}
