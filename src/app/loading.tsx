import { FaSpinner } from "react-icons/fa";

export default function Loader() {
  return (
    <div className={`animate-spin text-gray-500 text-4xl mx-auto`}>
      <FaSpinner />
    </div>
  );
}
