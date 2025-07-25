/* eslint-disable @next/next/no-img-element */
import useSelectedRuasStore from "@/app/stores/selected_ruas_store";
import useSelectedStaStore from "@/app/stores/selected_sta_store";
import clsx from "clsx";
import { useState } from "react";
import RoadCondition from "./road_condition";
import { Sta } from "../sta/page";
import { ArrowLeft } from "lucide-react";

export default function RoadConditionSidebar() {
  const [isStaDetail, setIsStaDetail] = useState(false);
  const { selected: selectedRuas, set: setSelectedRuas } =
    useSelectedRuasStore();
  //   const { selectedRuas, setSelectedRuas } = useSelectedRuasStore(
  //     (selectedRuas) => ({
  //       selectedRuas: selectedRuas.selected,
  //       setSelectedRuas: selectedRuas.set,
  //     })
  //   );

  const { selected: selectedSta, set:setSelectedSta } = useSelectedStaStore();

  //   const { selectedSta, setSelectedSta } = useSelectedStaStore(
  //     (selectedSta) => ({
  //       selectedSta: selectedSta.selected,
  //       setSelectedSta: selectedSta.set,
  //     })
  //   );

  return (
    <aside
      className={clsx(
        selectedRuas || selectedSta
          ? "lg:w-4/6 xl:w-1/3 w-2/3 p-4 shrink-0"
          : "w-0 p-0",
        "transition-all duration-500 ease-in-out overflow-y-auto border-r h-full  bg-white"
      )}
    >
      <div>
        {selectedSta ? (
          <div className="">
            <div className="flex gap-2 items-center mb-5">
            <ArrowLeft className="cursor-pointer" onClick={() => setSelectedSta(false)}/>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Detail STA
            </h2>
            </div>
            <Sta data={selectedSta} />
          </div>
        ) : (
          // null
          <RoadCondition
            selectedRuas={selectedRuas}
            setSelectedRuas={setSelectedRuas}
          />
        )}
      </div>
    </aside>
  );
}
