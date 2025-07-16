import Button from "@/components/Button";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Airbnb Application Clone system</h1>
      <button
        type="button"
        className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full"
      >
        Get Started
      </button>
      <Button
        title="Click me"
        className="border mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      />
      <Button
        title="Click me2"
        className="border mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
      />
    </main>
  );
};

export default Home;
