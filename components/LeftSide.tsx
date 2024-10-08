import { DungeonTable } from "./dungeon-table";

const LeftSide = () => {
  return (
    <div className="w-full md:w-1/4 m-auto border-solid border-blue-100 rounded-md shadow-md border-2 mt-12 p-4 bg-blue-200">
      <h2 className="text-xl font-bold mb-4">Bis links</h2>
      <div className="space-y-4">
        <div className="p-2 bg-rose-100 rounded-md shadow-md">
          <a
            href="https://maxroll.gg/wow/class-guides/blood-death-knight-mythic-plus-guide#gear-header"
            className="text-red-700 hover:text-blue-900"
          >
            DK BIS
          </a>
        </div>
        <div className="p-2 bg-zinc-100 rounded-md shadow-md">
          <a
            href="https://maxroll.gg/wow/class-guides/fury-warrior-mythic-plus-guide#gear-header"
            className="text-zinc-700 hover:text-blue-900"
          >
            WARRIOR BIS
          </a>
        </div>
        <div className="p-2 bg-blue-300 rounded-md shadow-md">
          <a
            href="https://maxroll.gg/wow/class-guides/restoration-shaman-mythic-plus-guide#gear-header"
            className="text-blue-700 hover:text-blue-900"
          >
            SHAMAN BIS
          </a>
        </div>
      </div>
      <DungeonTable />
    </div>
  );
};
export default LeftSide;
