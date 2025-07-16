import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Click me"
        styles="border mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded-full rounded-lg rounded-sm"
      />
    </div>
  );
};

export default Landing;
