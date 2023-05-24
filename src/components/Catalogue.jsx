import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom";
import Contact from "./Contact";
import { DidMount } from "./CommonFunctions";
import {
    WoodImages,
    FloorImages,
    CommImages,
    WallImages,
} from "./CatalogueItems";

const Catalogue = () => {
    let { id } = useParams();
    let defInd = 0;
    if (id === "wood") {
        defInd = 1;
    } else if (id === "floor") {
        defInd = 2;
    } else if (id === "comm") {
        defInd = 3;
    }
    return (
        <>
            <div
                onLoad={DidMount}
                className="fade-in px-2 md:px-4 py-8 md:py-8"
            >
                <div className="max-w-5xl mx-auto">
                    <h1 className="uppercase font-hero text-2xl md:text-3xl font-medium text-center mb-6">
                        Catalogue
                    </h1>
                    <p className="text-lg md:text-xl text-center mb-6 px-4 md:px-0">
                        From wall tiles to commercial space design, from wood
                        flooring to kitchen backsplash - We've got it all!
                    </p>
                    <Tabs className="Tabs" defaultIndex={defInd}>
                        <TabList className="grid grid-cols-2 md:grid-cols-4 gap-4 font-semibold md:text-lg text-center uppercase tracking-[0.2em]">
                            <Tab className="outline-none inline-block cursor-pointer pb-2">
                                Wall Tiles
                            </Tab>
                            <Tab className="outline-none inline-block cursor-pointer pb-2">
                                Wood Flooring
                            </Tab>
                            <Tab className="outline-none inline-block cursor-pointer pb-2">
                                Floor Tiles
                            </Tab>
                            <Tab className="outline-none inline-block cursor-pointer pb-2">
                                Commercial Spaces
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <WallImages />
                        </TabPanel>
                        <TabPanel>
                            <WoodImages />
                        </TabPanel>
                        <TabPanel>
                            <FloorImages />
                        </TabPanel>
                        <TabPanel>
                            <CommImages />
                        </TabPanel>
                    </Tabs>
                    {/* <p className="mt-8 text-lg md:text-xl">
                        Found something you like? Drop us a call at{" "}
                        <Link
                            to="tel:+917000588373"
                            className="font-semibold text-blue-800"
                        >
                            +91-700-058-8373
                        </Link>
                        .
                    </p> */}
                </div>
            </div>
            <Contact title="Found Something You Like?" tag="catalogue" />
        </>
    );
};

export default Catalogue;
