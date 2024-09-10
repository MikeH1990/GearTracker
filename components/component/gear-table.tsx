"use client";

import { useState, useMemo } from "react";
import datas from "../../app/MData.js";

interface GearItem {
  Slot: string;
  Dungeon: string;
  class: string;
  BIS: boolean;
}

interface GearTableProps {
  classFilter: string;
  slotFilter: string;
}

export function GearTable({ classFilter, slotFilter }: GearTableProps) {
  const [sortColumn, setSortColumn] = useState<keyof GearItem>("Slot");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const data: GearItem[] = datas;

  const getClassBackgroundColor = (className: string) => {
    switch (className.toLowerCase()) {
      case "warrior":
        return "bg-slate-300";
      case "shaman":
        return "bg-blue-100";
      case "dk":
        return "bg-rose-200";
      default:
        return "bg-zinc-200";
    }
  };

  const getBorderClass = (bis: boolean) => {
    return bis ? "border-4 border-green-200" : "";
  };

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return (
        (classFilter === "All Classes" ||
          item.class.toLowerCase() === classFilter.toLowerCase()) &&
        (slotFilter === "All Items" ||
          item.Slot.toLowerCase() === slotFilter.toLowerCase())
      );
    });
  }, [data, classFilter, slotFilter]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const handleSort = (column: keyof GearItem) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-muted">
            <th
              className="px-4 py-3 text-left cursor-pointer hover:bg-muted-foreground/10"
              onClick={() => handleSort("Slot")}
            >
              Slot{" "}
              {sortColumn === "Slot" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </th>
            <th
              className="px-4 py-3 text-left cursor-pointer hover:bg-muted-foreground/10"
              onClick={() => handleSort("Dungeon")}
            >
              Dungeon{" "}
              {sortColumn === "Dungeon" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </th>
            <th
              className="px-4 py-3 text-left cursor-pointer hover:bg-muted-foreground/10"
              onClick={() => handleSort("class")}
            >
              Class{" "}
              {sortColumn === "class" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </th>
            <th
              className="px-4 py-3 text-left cursor-pointer hover:bg-muted-foreground/10"
              onClick={() => handleSort("BIS")}
            >
              BIS{" "}
              {sortColumn === "BIS" && (
                <span className="ml-2">
                  {sortDirection === "asc" ? "\u2191" : "\u2193"}
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr
              key={index}
              className={`border-b-3 hover:bg-muted/10 ${
                index % 2 === 0 ? "bg-muted/5" : ""
              } ${getClassBackgroundColor(item.class)} ${getBorderClass(
                item.BIS
              )}`}
            >
              <td className="px-4 py-3">{item.Slot}</td>
              <td className="px-4 py-3">{item.Dungeon}</td>
              <td className="px-4 py-3">{item.class.toUpperCase()}</td>
              <td className="px-4 py-3">{item.BIS ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
