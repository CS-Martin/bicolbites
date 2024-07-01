import exp from 'constants';
import './styles/loading.css';

const Loader = () => {
    return (
        <div className="relative z-50 h-[100vh] w-[100vw] overflow-hidden bg-white">
            <h1 className="loading-font absolute -top-9 left-[50%] flex h-full translate-x-[-50%] items-center text-xl md:text-6xl">
                Cooking in progress..
            </h1>
            <div id="cooking" className="w-auto md:w-[30vw]">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div id="area">
                    <div id="sides">
                        <div id="pan"></div>
                        <div id="handle"></div>
                    </div>
                    <div id="pancake">
                        <div id="pastry"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
