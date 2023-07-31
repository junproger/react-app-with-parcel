import { Count } from "./../Components/Count";
import { Refer } from "./../Components/Refer";

export const App = () => {
  return (
  <>
    <h1 className="appTitle">
      The pure React.js + Parcel.js bundler.
    </h1>
    <p>
      Counter on input and on span element with React Hooks useRef.
    </p>
    <Count />
    <Refer />
  </>
  );
};
