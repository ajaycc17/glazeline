import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// import styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// wood images
const WoodImages = ({}) => {
    let woodImg = [];
    let counter = "";
    for (let i = 1; i <= 20; i++) {
        if (i < 10) {
            counter = "000";
        } else {
            counter = "00";
        }
        woodImg.push(
            <SwiperSlide key={`slide-${i}`} className="flex justify-center">
                <img
                    className="h-[calc(100vh-161px)] object-contain"
                    src={`/catalogue-images/wooden-images/${counter}${i}.jpg`}
                    alt={`Wood slide ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[calc(100vh-161px)] my-4"
            >
                {woodImg}
            </Swiper>
            <div className="flex justify-end px-8">
                <a
                    href="/catalogue-images/wooden.pdf"
                    className="border-b border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download the full catalogue
                </a>
            </div>
        </div>
    );
};

// floor images
const FloorImages = ({}) => {
    let floorImg = [];
    for (let i = 1; i <= 20; i++) {
        floorImg.push(
            <SwiperSlide key={`slide-${i}`} className="flex justify-center">
                <img
                    className="h-[calc(100vh-161px)] object-contain"
                    src={`/catalogue-images/floor-images/${i}.jpg`}
                    alt={`Floor slide ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[calc(100vh-161px)] my-4"
            >
                {floorImg}
            </Swiper>
            <div className="flex justify-end px-8">
                <a
                    href="/catalogue-images/floor.pdf"
                    className="border-b border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download the full catalogue
                </a>
            </div>
        </div>
    );
};

// commercial images
const CommImages = ({}) => {
    let commImg = [];
    for (let i = 0; i <= 19; i++) {
        commImg.push(
            <SwiperSlide key={`slide-${i}`} className="flex justify-center">
                <img
                    className="h-[calc(100vh-161px)] object-contain"
                    src={`/catalogue-images/commercial-images/${i}.jpg`}
                    alt={`Commercial slide ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[calc(100vh-161px)] my-4"
            >
                {commImg}
            </Swiper>
            <div className="flex justify-end px-8">
                <a
                    href="/catalogue-images/commercial.pdf"
                    className="border-b border-black ml-1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download the full catalogue
                </a>
            </div>
        </div>
    );
};

// wall images
const WallImages = ({}) => {
    let wallImg = [];
    for (let i = 2; i <= 21; i++) {
        wallImg.push(
            <SwiperSlide key={`slide-${i}`} className="flex justify-center">
                <img
                    className="h-[calc(100vh-161px)] object-contain"
                    src={`/catalogue-images/wall-images/${i}.jpg`}
                    alt={`Wall slide ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[calc(100vh-161px)] my-4"
            >
                {wallImg}
            </Swiper>
            <div className="flex justify-end px-8">
                <a
                    href="/catalogue-images/wall.pdf"
                    className="border-b border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download the full catalogue
                </a>
            </div>
        </div>
    );
};

// bathroom images
const BathImages = ({}) => {
    let bathImg = [];
    for (let i = 0; i <= 19; i++) {
        bathImg.push(
            <SwiperSlide key={`slide-${i}`} className="flex justify-center">
                <img
                    className="h-[calc(100vh-161px)] object-contain"
                    src={`/catalogue-images/bathroom-fittings/${i}.jpg`}
                    alt={`Bathroom slide ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[calc(100vh-161px)] my-4"
            >
                {bathImg}
            </Swiper>
            <div className="flex justify-end px-8">
                <a
                    href="/catalogue-images/bathroom.pdf"
                    className="border-b border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download the full catalogue
                </a>
            </div>
        </div>
    );
};
// industrial carpeting images
const IndImages = ({}) => {
    let indImg = [];
    for (let i = 0; i <= 19; i++) {
        indImg.push(
            <SwiperSlide key={`slide-${i}`} className="flex justify-center">
                <img
                    className="h-[calc(100vh-161px)] object-contain"
                    src={`/catalogue-images/industrial-carpeting/${i}.jpg`}
                    alt={`Carpet slide ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div className="max-w-2xl mx-auto">
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper h-[calc(100vh-161px)] my-4"
            >
                {indImg}
            </Swiper>
            <div className="flex justify-end px-8">
                <a
                    href="/catalogue-images/carpet.pdf"
                    className="border-b border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download the full catalogue
                </a>
            </div>
        </div>
    );
};

export {
    WoodImages,
    FloorImages,
    CommImages,
    WallImages,
    BathImages,
    IndImages,
};
