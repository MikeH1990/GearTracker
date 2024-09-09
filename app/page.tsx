import { GearTable } from "@/components/component/gear-table";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-3/4 m-auto border-solid border-black pt-12">
      <h2>gear tracker</h2>
      <GearTable />
    </div>
  );
}
