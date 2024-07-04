import Display from './Display';

export default function Content({ keyPressed }) {
    return (
        <section className="bg-gray-900 text-white h-screen flex items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center mt-[-250px]">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
                        getKeyCode
                        <span className="sm:block"> US standard 101 </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">Press the key you want to get the keycode for</p>

                    <Display keyPressed={keyPressed} />
                </div>
            </div>
        </section>
    );
}
