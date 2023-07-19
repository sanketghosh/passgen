import { useState } from "react";

export default function GeneratorBox() {
  let checkboxDataArray = [
    {
      title: "Include uppercase character",
      state: false,
    },
    {
      title: "Include lowercase character",
      state: false,
    },
    {
      title: "Include numbers",
      state: false,
    },
    {
      title: "Include symbols",
      state: false,
    },
  ];

  const [length, setLength] = useState(6);
  const [checkboxData, setCheckboxData] = useState(checkboxDataArray);

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  return (
    <div className="w-full py-6 px-4 bg-zinc-100 rounded-lg space-y-6 text-sm md:text-[15px] shadow-md shadow-zinc-500 font-medium">
      {/* generated password section */}
      <div className="w-full flex items-center justify-between gap-3">
        <input
          type="text"
          placeholder="x#R8z3x#R8z3x#R8z3x#"
          className=" border-none outline-none bg-transparent placeholder:text-zinc-400 w-full cursor-auto text-[15px] md:text-[17px]"
        />
        <button className="generalBtnStyle py-2">copy</button>
      </div>

      {/* character limit section  */}
      <div>
        <div className="flex items-center justify-between">
          <h2>Character Length</h2>
          <span>{length < 10 ? "0" + length : length}</span>
        </div>
        <input
          type="range"
          min={"6"}
          max={"20"}
          className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer mt-3"
          value={length}
          onChange={handleLengthChange}
        />
      </div>

      {/* checkboxes section  */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {checkboxData.map((data) => (
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={data.state}
              className="w-4 h-4 border-none cursor-pointer"
            />
            <span>{data.title}</span>
          </div>
        ))}
      </div>

      {/* last section */}
      <div className="w-full">
        <div className="w-full justify-between items-center flex">
          <span>Password Strength</span>
          <span>Medium</span>
        </div>
        <button className="generalBtnStyle w-full py-3 mt-3">
          Generate Password
        </button>
      </div>
    </div>
  );
}
