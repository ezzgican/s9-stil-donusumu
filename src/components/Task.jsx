
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  return (
    <div className="p-6 bg-white rounded-[5px] leading-6 mt-4 shadow-[0_4px_5px_0_rgb(0_0_0_/_10%)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim: <span className="inline-block px-2 py-1 rounded-xs" >{taskObj.deadline}</span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]" >{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block px-3 py-1 text-sm border border-[#ccc] mr-1 mb-1.5 rounded-[30px]" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgba(0,0,0,0.05)] rounded-sm border-0 cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
