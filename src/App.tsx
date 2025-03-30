import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button className="bg-blue-500 text-white text-xl rounded-xl py-4 px-8 hover:bg-blue-600 active:bg-blue-700 focus:ring-4 focus:ring-blue-300">
          Click me
        </Button>
      </div>
    </>
  );
}

export default App;
