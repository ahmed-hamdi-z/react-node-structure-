
// Components
import SpinningItems from "./components/spinning_items";

// SpinningBox component definition
const SpinningBox: React.FC = () => {
  return (
    <div className="grid place-content-center bg-slate-900 py-12 -rotate-1">
      <SpinningItems />
    </div>
  );
};

export default SpinningBox;
