import { Count } from "./../Components/Count";

import { Refer } from "./../Components/Refer";

export const App = () => {
  return (
  <>
    <h1 className="appTitle">
      Hello, World!
    </h1>
    <p>
      This pure React.js + Parcel.js bundler.
    </p>
    <Count />
    <Refer />
  </>
  );
};
