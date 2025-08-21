import { ArrowDownTrayIcon, ArrowUpTrayIcon, ShareIcon } from "@heroicons/react/24/outline";

const QuickAction = () => {

    const handleClick = (action) => {
        alert(`You clicked ${action}`);
    };

    return (
        <>
            <div className="p-4 w-full mt-2">
                <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>

                <div className="flex flex-row gap-3 w-full">
                    {/* Import Button */}
                    <button onClick={() => handleClick("Import")} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                        <ArrowDownTrayIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-700">Import</span>
                    </button>

                    {/* Export Button */}
                    <button onClick={() => handleClick("Export")} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                        <ArrowUpTrayIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-700">Export</span>
                    </button>

                    {/* Share Button */}
                    <button onClick={() => handleClick("Share")} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                        <ShareIcon className="h-5 w-5 text-gray-500" />
                        <span className="text-sm text-gray-700">Share</span>
                    </button>
                </div>
            </div>
        </>
    )
};

export default QuickAction;