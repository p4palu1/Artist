import React from 'react'
import { Carousel, Button } from "react-bootstrap";
import p1 from "../css/pics/2F1A6795_1.jpg"
import p2 from "../css/pics/0D6A0092.jpg"
import p3 from "../css/pics/0D6A9955.jpg"
import p4 from "../css/pics/0D6A9985.jpg"
import '../css/CarouselSection.css';


const CarouselSection = () => {
    return (
        <Carousel data-ride="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={p1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <Button>
                        ציורי נוף - שמן
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={p2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <Button>
                        ציורי נוף - רישומים
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={p3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <Button>
                        ציורי גוף
                    </Button>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSection
