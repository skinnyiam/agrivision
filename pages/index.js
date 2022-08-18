import CorouselPage from "../components/CorouselPage";

export default function Home() {
  return (
   <>
    <div className="h-screen max-w-screen bg-[#0B6E4F] flex overflow-hidden">
      <div className="flex w-1/2 justify-center items-center">
        <div className="ml-16">
          <h1 className="text-white text-2xl font-semibold">Welcome to <br /> AgriAbhyaas</h1>
          <p className="text-white text-sm font-medium mt-2">
            As they say, practice makes you perfect. <br /> AgriAbhyaas is your one
            stop platform to practice and excel in challenging subjects.
          </p>
          <h1 className="text-white text-xl font-semibold mt-4">KNOW YOUR SELF TESTS</h1>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <img className="w-auto h-96" src="./vector.png" alt="" />
      </div>
   
    </div>
    <CorouselPage />
    </>
  );
}
