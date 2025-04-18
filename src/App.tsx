import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";

function App() {
  return (
    <>
      <div className="bg-blue-300 h-screen flex items-center justify-center p-5">
        <div className="bg-white p-4 rounded-lg shadow-2xl sm:flex sm:gap-20 sm:p-0">
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 sm:h-full sm:w-36 sm:rounded-none object-cover rounded-full"
              src="https://www.hallmarknameplate.com/wp-content/uploads/2018/12/AdobeStock_4381957.jpeg"
              alt="circuit board"
            ></img>
            <span>Vincent Walker</span>
          </div>
          <div className="mt-2">
            <p className="italic font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              quaerat molestiae in enim quia iste veniam quo at, quibusdam, esse
              minima voluptatem tenetur iure! Excepturi incidunt laudantium vel
              blanditiis tempore?
            </p>
            <span className="text-sm text-gray-500">
              Electrical and Electronics Engineering Student
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
