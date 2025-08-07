import { FiChevronDown } from "react-icons/fi";
import Badge from "../ui/Badge";
import AvatarGroup from "../ui/AvatarGroup";
import { HiEllipsisHorizontal } from "react-icons/hi2";

const imgData = [
  { src: "user_1.jpg", alt: "user avatar" },
  { src: "user_1.jpg", alt: "user avatar" },
  { src: "user_1.jpg", alt: "user avatar" },
  { src: "user_1.jpg", alt: "user avatar" },
];
const WalletLedger = () => {
  return (
    <section className="flex flex-col gap-x-4 gap-y-5">
      <div className="flex justify-between gap-x-4 gap-y-5 flex-wrap">
        <div className="flex gap-5 items-center">
          <div className="flex gap-2 items-center">
            <h2 className="heading">Wallet Ledger</h2>
            <FiChevronDown />
          </div>
          <Badge title="Active" success={true} />
        </div>
        <div className="flex gap-4">
          <button className="bg-primary text-[#020303] px-5 py-2 rounded-3xl">
            Share
          </button>
          <button className="text-3xl p-1 rounded-full border border-gentle-gray/20">
            <HiEllipsisHorizontal />
          </button>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <AvatarGroup imgData={imgData} />
        <p className="text-gentle-gray">Ava, Liam, Noah +12 others</p>
      </div>
    </section>
  );
};

export default WalletLedger;
