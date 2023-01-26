import { Count } from "./../Components/Count";
import { Refer } from "./../Components/Refer";

export const App = () => {
  return (
  <>
    <h1 className="appTitle">
      Hello, World!
    </h1>
    <p>
      The pure React.js + Parcel.js bundler.
    </p>
    <Count />
    <Refer />
  </>
  );
};
