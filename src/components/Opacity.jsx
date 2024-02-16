import { useState } from "react";



const Opacity = () => {
    const [opacity, setOpacity] = useState(
      <li className="flex gap-3 opacity-50">
        <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full mb-4">
          2
        </h1>
        <h1 className="text-2xl font-bold cursor-pointer">
          Choose description
        </h1>
      </li>
    );

  return (
    <ul>
      <li className="flex gap-3">
        <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full mb-4">
          1
        </h1>
        <h1 className="text-2xl font-bold cursor-pointer">Choose title</h1>
      </li>
      <li className="flex gap-3 opacity-50">
        <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full mb-4">
          2
        </h1>
        <h1 className="text-2xl font-bold cursor-pointer">
          Choose description
        </h1>
      </li>
      <li className="flex gap-3 opacity-50">
        <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full ">
          3
        </h1>
        <h1 className="text-2xl font-bold cursor-pointer">Confirm data</h1>
      </li>
    </ul>
  );
}

export default Opacity