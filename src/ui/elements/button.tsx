import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Button(){
    return (
        <button disabled className="bg-green-500 rounded-full text-white flex flex-row-reverse items-center justify-center mt-4 px-4 py-2">
            التفاصيل
            <ArrowLeftIcon className="w-5 h-5 me-3" />
        </button>
    );
}