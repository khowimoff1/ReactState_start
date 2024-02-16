import { useState } from "react";
import Opacity from "./components/Opacity";

const App = () => {
  const [tContent, settContent] = useState("Choose title content");
  const [opacity2, setOpacity2] = useState("flex gap-3 opacity-50");
  const [opacity3, setOpacity3] = useState("flex gap-3 opacity-50");
  const [hidden, setHidden] = useState(
    "p-4 text-xl font-bold bg-slate-300 rounded-lg hidden"
  );
  const [button, setButton] = useState("flex gap-5");
  const [bContent, setBContent] = useState("Submit title");
  const [bContent2, setBContent2] = useState("Back");

  const Submit = () => {
    if (tContent === "Choose title content") {
      settContent("Choose description content");
      setOpacity2("flex gap-3");
      setHidden("p-4 text-xl font-bold bg-slate-300 rounded-lg");
      setBContent("Submit description");
    } else if (tContent === "Choose description content") {
      settContent("Are you happy now?");
      setOpacity3("flex gap-3");
      setBContent("Yes,go ahead");
      setBContent2("No,go back");
    } else {
      settContent("Ok,we're done.Thanks for sending us your data!");
      setButton("hidden");
    }
  };
  const Back = () => {
    if (tContent === "Choose description content") {
      settContent("Choose title content");
      setOpacity2("flex gap-3 opacity-50");
      setHidden("hidden");
      setBContent("Submit title");
    } else if (tContent === "Are you happy now?") {
      settContent("Choose description content");
      setOpacity3("flex gap-3 opacity-50");
      setBContent("Submit description");
      setBContent2("Back");
    }
  };

  const SubmitTitle = () => {
    if (tContent === "Choose description content") {
      Back();
    }
  };
  const SubmitDescription = () => {
    if (tContent === "Choose title content") {
      Submit();
    }
    if (tContent === "Are you happy now?") {
      Back();
    }
    if (tContent === "Ok,we're done.Thanks for sending us your data!") {
      settContent("Choose description content");
      setOpacity3("flex gap-3 opacity-50");
      setBContent("Submit description");
      setBContent2("Back");
      setButton("flex gap-5");
    }
  };
  const SubmitData = () => {
    if (tContent === "Choose description content") {
      Submit();
    }
  };

  return (
    <div className="flex gap-20 bg-white py-8 pl-8 pr-8 rounded-2xl confirm">
      <ul>
        <li className="flex gap-3" onClick={SubmitTitle}>
          <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full mb-4">
            1
          </h1>
          <h1 className="text-2xl font-bold cursor-pointer">Choose title</h1>
        </li>
        <li className={opacity2} onClick={SubmitDescription}>
          <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full mb-4">
            2
          </h1>
          <h1 className="text-2xl font-bold cursor-pointer">
            Choose description
          </h1>
        </li>
        <li className={opacity3} onClick={SubmitData}>
          <h1 className="block bg-blue-800 text-white px-3 py-1 rounded-full ">
            3
          </h1>
          <h1 className="text-2xl font-bold cursor-pointer">Confirm data</h1>
        </li>
      </ul>
      <div>
        <h1 className="text-2xl font-bold mb-4 w-96">{tContent}</h1>
        <div className={button}>
          <button className={hidden} onClick={Back}>
            {bContent2}
          </button>
          <button
            className="p-4 text-xl font-bold bg-slate-300 rounded-lg"
            onClick={Submit}
          >
            {bContent}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
