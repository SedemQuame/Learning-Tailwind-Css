import { MenuIcon } from "@heroicons/react/outline";
import { ChartBarIcon, CogIcon, DocumentIcon } from "@heroicons/react/solid";

function Pane() {
  return (
    <>
      <div className="bg-black flex justify-between items-center w-72 h-16 rounded-md px-4 content-center">
        <MenuIcon className="h-8 w-8 text-white" />
        <button>
          <ChartBarIcon className="h-8 w-8 text-white" />
        </button>
        <button>
          <CogIcon className="h-8 w-8 text-white" />
        </button>
        <button>
          <DocumentIcon className="h-8 w-8 text-white" />
        </button>
      </div>
    </>
  );
}

export default Pane;
