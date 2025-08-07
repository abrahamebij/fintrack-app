import { FiChevronDown } from "react-icons/fi";
import Badge from "../ui/Badge";

const WalletLedger = () => {
  return (
    <section className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <h2 className="heading">Wallet Ledger</h2>
            <FiChevronDown />
          </div>
          <Badge title="Active" success={true} />
        </div>
      </div>
    </section>
  );
};

export default WalletLedger;
