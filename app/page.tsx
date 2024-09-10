"use client";
import { ClassItemFilters } from "@/components/class-item-filters";
import { GearTable } from "@/components/component/gear-table";
import LeftSide from "@/components/LeftSide";
import { useState } from "react";

export default function Home() {
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedItem, setSelectedItem] = useState("All Items");

  return (
    <div className="flex flex-col md:flex-row bg-gray-200">
      <LeftSide />
      <div className="w-full md:w-2/4 m-auto border-solid border-blue-200 border-2 mt-12 p-4 rounded-md shadow-md bg-blue-200">
        <h2 className="text-xl font-bold mb-4">Gear Tracker</h2>
        <ClassItemFilters
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <GearTable classFilter={selectedClass} slotFilter={selectedItem} />
      </div>
    </div>
  );
}
