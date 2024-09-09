"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DungeonTable() {
  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Dungeon</TableHead>
            <TableHead className="text-right"># of items</TableHead>
            <TableHead className="text-right"># of BIS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              Ara-Kara, City of Echoes
            </TableCell>
            <TableCell className="text-right">10</TableCell>
            <TableCell className="text-right">7</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">City of Threads</TableCell>
            <TableCell className="text-right">13</TableCell>
            <TableCell className="text-right">4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Grim Batol</TableCell>
            <TableCell className="text-right">18</TableCell>
            <TableCell className="text-right">8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Mists of Tirna Scithe</TableCell>
            <TableCell className="text-right">14</TableCell>
            <TableCell className="text-right">6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Siege of Boralus</TableCell>
            <TableCell className="text-right">11</TableCell>
            <TableCell className="text-right">5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">The Dawnbreaker</TableCell>
            <TableCell className="text-right">8</TableCell>
            <TableCell className="text-right">4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">The Necrotic Wake</TableCell>
            <TableCell className="text-right">12</TableCell>
            <TableCell className="text-right">5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">The Stonevault</TableCell>
            <TableCell className="text-right">11</TableCell>
            <TableCell className="text-right">3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
