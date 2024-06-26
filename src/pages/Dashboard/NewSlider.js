import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    Col,
    Card,
    CardBody,
} from 'reactstrap';

const items = [
    {
        id: 1,
        icon: "currency-btc",
        title: "Bitcoin",
        description: "Bitcoin prices fell sharply amid the global sell-off in equities. Negative news over the Bitcoin past week has dampened Bitcoin basics sentiment for bitcoin."
    },
    {
        id: 2,
        icon: "ethereum",
        title: "ETH",
        description: "Bitcoin prices fell sharply amid the global sell-off in equities. Negative news over the Bitcoin past week has dampened Bitcoin basics sentiment for bitcoin."
    },
    {
        id: 3,
        icon: "litecoin",
        title: "Litecoin",
        description: "Bitcoin prices fell sharply amid the global sell-off in equities. Negative news over the Bitcoin past week has dampened Bitcoin basics sentiment for bitcoin."
    },
];

const NewSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <div className="text-center p-2">
                    <i className={'mdi mdi-' + item.icon + ' widget-box-1-icon'}></i>
                    <div className="avatar-md m-auto">
                        <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
                            <i className={"mdi mdi-" + item["icon"]}></i>
                        </span>
                    </div>
                    <h4 className="mt-3 lh-base fw-normal text-white">
                        <b>{item["title"]}</b> News
                    </h4>
                    <p className="text-white-50 font-size-13"> {item["description"]} </p>
                    <Link to="/invoices-list" className="btn btn-light btn-sm" >
                        View details <i className="mdi mdi-arrow-right ms-1"></i>
                    </Link>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Col xl={4}>
            <Card className="bg-primary text-white shadow-primary card-h-100">
                <CardBody>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        className="pb-4"
                    >
                        {slides}
                    </Carousel>
                    <CarouselIndicators tag="button" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="carousel-indicators-rounded m-0" />
                </CardBody>
            </Card>
        </Col>
    );
};

export default NewSlider;