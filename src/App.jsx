import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-[95px]">
      <h1 className="font-semibold text-4xl text-center text-[#4F4F4F]">
        Welcome, Sign up
      </h1>

      <div className="w-[512px] h-[494px] py-[72px] px-[132px] bg-white rounded-lg mt-[53px] shadow-md">
        <h1 className="font-medium text-base text-center text-[#667085]">
          It is our great pleasure to have you on board!
        </h1>

        <form className="flex flex-col gap-y-[14px] mt-[34px]">
          <input
            type="email"
            name="email"
            className="font-medium text-sm text-[#8A8A8A] p-[13px] rounded border border-[#A7A7A7] w-full h-[42px]"
            placeholder="Enter your Email"
            required
          />
          <input
            type="text"
            name="login"
            className="font-medium text-sm text-[#8A8A8A] p-[13px] rounded border border-[#A7A7A7] w-full h-[42px]"
            placeholder="Enter your Login"
            required
          />
          <input
            type="password"
            name="password"
            className="font-medium text-sm text-[#8A8A8A] p-[13px] rounded border border-[#A7A7A7] w-full h-[42px]"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="font-bold text-sm text-white rounded text-center mt-[34px] py-[12px] bg-[#2D88D4] w-full"
          >
            Sign up
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="font-bold text-sm text-[#2D88D4] rounded text-center border border-[#2D88D4] py-[12px] w-full"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
