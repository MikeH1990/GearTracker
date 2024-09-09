"use client";

import { useState, useMemo } from "react";
import datas from "../../app/MData.js";

export function GearTable() {
  const [sortColumn, setSortColumn] = useState("slot");
  const [sortDirection, setSortDirection] = useState("asc");
  const data = datas;

  const getClassBackgroundColor = (className: any) => {
    switch (className) {
      case "warrior":
        return "bg-slate-300";
      case "shaman":
        return "bg-blue-100";
      case "DK":
        return "bg-rose-200";
      default:
        return "";
    }
  };

  const getBorderClass = (bis: boolean) => {
    return bis ? "border-8 border-yellow-300" : "";
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);
  const handleSort = (column: any) => {
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
              onClick={() => handleSort("slot")}
            >
              Slot{" "}
              {sortColumn === "slot" && (
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
              onClick={() => handleSort("bis")}
            >
              BIS{" "}
              {sortColumn === "bis" && (
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
              className={`border-b hover:bg-muted/10 ${
                index % 2 === 0 ? "bg-muted/5" : ""
              } ${getClassBackgroundColor(item.class)} ${getBorderClass(
                item.BIS
              )}`}
            >
              <td className="px-4 py-3">{item.Slot}</td>
              <td className="px-4 py-3">{item.Dungeon}</td>
              <td className="px-4 py-3">{item.class}</td>
              <td className="px-4 py-3">{item.BIS ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
