import data from '../data/codes.json';

export default function Display({ keyPressed }) {
    // Filtrar el dato por keyPressed
    const filteredKey = data.filter((k) => k.key === keyPressed)[0];

    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
            <div className="w-full gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                <div className="mx-auto rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-white">
                            Information
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <span className="text-3xl font-bold text-white sm:text-4xl">Key </span>
                            <strong className="text-3xl font-bold text-white sm:text-4xl">{keyPressed}</strong>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {filteredKey ? <span className="text-white">{`KeyCode: ${filteredKey.keyCode}`}</span> : <span className="text-white">KeyCode not found</span>}
                        </li>
                    </ul>

                    <a href="#" className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                        More info
                    </a>
                </div>
            </div>
        </div>
    );
}
