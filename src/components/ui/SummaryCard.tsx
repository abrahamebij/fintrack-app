import { FiMoreHorizontal } from "react-icons/fi";

const SummaryCard = () => {
  return (
    <div className="flex flex-col px-7 py-4 gap-3 font-bold bg-gentle-gray/[9%] rounded-xl border border-black/0">
      <div className="flex text-lg justify-between">
        <h5>Total Balance</h5>
        <button>
          <FiMoreHorizontal />
        </button>
      </div>
      <p className="text-4xl font-bold">$12,512</p>
      <span className="text-primary text-sm font-medium">+5%</span>
    </div>
  );
};

export default SummaryCard;
