import SummaryCard from "../ui/SummaryCard";

const Summary = () => {
  return (
    <div className="grid gap-4">
      <h3 className="font-bold text-[20px]">Summary</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 ">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
    </div>
  );
};

export default Summary;
