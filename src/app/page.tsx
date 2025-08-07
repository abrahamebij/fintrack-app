import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Summary from "@/components/layout/Summary";
import TransactionTable from "@/components/layout/TransactionTable";
import WalletLedger from "@/components/layout/WalletLedger";

export default function Home() {
  return (
    <div className="px-3 sm:px-5 pb-10 grid gap-10 container mx-auto">
      {/* <Sidebar /> */}
      <Header />
      <WalletLedger />
      <Summary />
      <TransactionTable />
    </div>
  );
}
