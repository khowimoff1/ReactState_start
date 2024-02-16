import { useState } from "react";

const Content = () => {
  const [tContent, settContent] = useState("Choose title content");
  const Submit = () => {
    if (tContent === "Choose title content") {
      settContent("Choose description content");
    } else if (tContent === "Choose description content") {
      settContent("Are you happy now?");
    } else {
      settContent("Ok,we're done.Thanks for sending us your data");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{tContent}</h1>
      <button
        className="p-4 text-xl font-bold bg-slate-300 rounded-lg"
        onClick={Submit}
      >
        Submit title
      </button>
    </div>
  );
};

export default Content;
