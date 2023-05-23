import React from "react";
import { Link } from "react-router-dom";
import CountUp, { useCountUp } from "react-countup";
import { Waypoint } from "react-waypoint";

const ChooseUs = () => {
    return (
        <div className="fade-in bg-black text-white px-2 md:px-4 py-20 md:py-28">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 md:gap-12">
                <h2 className="text-center md:text-left font-hero text-2xl md:text-3xl font-medium">
                    Why choose us?
                </h2>
                <div className="flex flex-col md:flex-row gap-10 md:gap-12">
                    <div className="flex flex-col">
                        <p className="text-lg md:text-xl md:mb-8 text-center md:text-left">
                            When it comes to your home renovation, tiling, and
                            interior design needs, trust Glazeline to provide a
                            comprehensive solution. With our extensive industry
                            experience, our passion for creative design and a
                            curated selection of top-quality products, we are
                            dedicated to delivering exceptional results that
                            seamlessly blend functionality and aesthetic appeal.
                        </p>
                        <div className="flex justify-between">
                            <div className="hidden md:flex flex-col items-start">
                                <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold">
                                    <CountUp
                                        className="account-balance"
                                        start={999}
                                        end={100000}
                                        duration={2}
                                        separator=", "
                                        suffix="+"
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() =>
                                            console.log("Started! 💨")
                                        }
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <Waypoint
                                                    onEnter={start}
                                                    bottomOffset="-10%"
                                                ></Waypoint>
                                            </div>
                                        )}
                                    </CountUp>
                                </h2>
                                <p className="text-lg">square feet tiled</p>
                            </div>
                            <div className="hidden md:flex flex-col items-start">
                                <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold">
                                    <CountUp
                                        className="account-balance"
                                        start={0}
                                        end={20}
                                        duration={2}
                                        separator=", "
                                        suffix="+"
                                        onEnd={() => console.log("Ended! 👏")}
                                        onStart={() =>
                                            console.log("Started! 💨")
                                        }
                                    >
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <Waypoint
                                                    onEnter={start}
                                                    bottomOffset="-10%"
                                                ></Waypoint>
                                            </div>
                                        )}
                                    </CountUp>
                                </h2>
                                <p className="text-lg">years of experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
