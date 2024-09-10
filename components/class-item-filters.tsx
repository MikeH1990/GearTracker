"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ClassItemFiltersProps {
  selectedClass: string;
  setSelectedClass: Dispatch<SetStateAction<string>>;
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

export function ClassItemFilters({
  selectedClass,
  setSelectedClass,
  selectedItem,
  setSelectedItem,
}: ClassItemFiltersProps) {
  const classes = ["All Classes", "Warrior", "DK", "Shaman"];
  const items = [
    "All Items",
    "Head",
    "Neck",
    "Shoulders",
    "Back",
    "Chest",
    "Wrist",
    "Gloves",
    "Belt",
    "Legs",
    "Boots",
    "Ring",
    "Trinket",
    "Weapons",
  ];

  return (
    <div className="flex space-x-4 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-40 justify-between bg-cyan-200"
          >
            {selectedClass} <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          {classes.map((classOption) => (
            <DropdownMenuItem
              key={classOption}
              onSelect={() => setSelectedClass(classOption)}
            >
              {classOption}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-40 justify-between bg-cyan-200"
          >
            {selectedItem} <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          {items.map((itemOption) => (
            <DropdownMenuItem
              key={itemOption}
              onSelect={() => setSelectedItem(itemOption)}
            >
              {itemOption}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
