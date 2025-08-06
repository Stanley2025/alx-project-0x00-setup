import Card from "@/components/Card";
import Button from "@/components/Button"; 
import React from "react";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      <h1 className="text-3xl font-bold">Welcome to the Landing Page</h1>
    
      <Card />

      
      <div className="flex flex-col items-center gap-4 border-t-2 pt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Button Component Instances</h2>
        <div className="flex items-center gap-4">
          
          <Button title="Small Button" styles="bg-blue-500 text-white hover:bg-blue-600 text-sm rounded-sm" />

        
          <Button title="Medium Button" styles="bg-green-500 text-white hover:bg-green-600 text-base rounded-md" />
          
          
          <Button title="Large Button" styles="bg-red-500 text-white hover:bg-red-600 text-lg rounded-full" />
        </div>
        <div className="flex items-center gap-4">
           
           <Button title="Small Outline" styles="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white text-sm rounded-sm" />
           <Button title="Medium Outline" styles="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-base rounded-md" />
           <Button title="Large Outline" styles="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-lg rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;