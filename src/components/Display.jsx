import data from "../data/codes.json";

export default function Display({ keyPressed }) {
    const filteredKey = data.filter((k) => k.key === keyPressed)[0];

    return (
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
            <div className="w-full gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                <div className="mx-auto rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <div style={{ fontSize: "40px" }}>⌨️</div>
                        {filteredKey && <h2 className="text-lg font-medium text-white">keyCode</h2>}

                        <p className="mt-2 sm:mt-4">
                            {filteredKey ? (
                                <strong style={{ fontSize: "90px" }} className="font-bold text-white sm:text-4xl">
                                    {filteredKey.keyCode}
                                </strong>
                            ) : (
                                <strong>Press a valid key please...</strong>
                            )}
                        </p>
                    </div>

                    {filteredKey ? (
                        <>
                            <h2 className="text-lg font-medium text-white">{`Key pressed: ${filteredKey.key}`}</h2>
                            <h2 className="text-lg font-medium text-white">{`Code: ${filteredKey.code}`}</h2>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
