import IconButton from "../components/common/IconButton";
import TextInput from "../components/common/TextInput";
import HalfFiller from "../components/common/HalfFiller";

function Signup() {
  return (
    <div className="h-screen flex">
      <HalfFiller />
      <div className="w-full lg:w-2/4 md:w-2/4 sm:w-full">
        <div className="h-full flex justify-center items-center flex-col">
          <h1 className="font-semibold text-3xl lg:text-5xl md:text-3xl sm:text-3xl text-green-500">
            Signup to Notes
          </h1>
          <div className="flex mt-4">
            <IconButton url="google-icon" />
            <IconButton url="fb-icon" />
            <IconButton url="in-icon" />
          </div>

          <h3 className="mt-1 text-lg">or use your email account</h3>

          <div className="mt-3 w-full flex flex-col items-center">
            <TextInput
              type="Email"
              placeholder="Email"
              className="text-lg p-2 h-10 w-3/5 max-w-sm rounded border-2 border-gray-200 mt-3 focus:outline-none focus:border-green-500"
            />
            <TextInput
              type="password"
              placeholder="Password"
              className="text-lg p-2 h-10 w-3/5 max-w-sm rounded border-2 border-gray-200 mt-3 focus:outline-none focus:border-green-500"
            />

            <TextInput
              type="password"
              placeholder="Confirm Password"
              className="text-lg p-2 h-10 w-3/5 max-w-sm rounded border-2 border-gray-200 mt-3 focus:outline-none focus:border-green-500"
            />
          </div>

          <button className="font-semibold text-base mt-10 bg-green-500 text-white w-24 h-10 rounded-3xl">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
