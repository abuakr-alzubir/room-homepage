'use client'
import Image from "next/image";
import React from "react";

const Showcase = () => {

  const [currentSlide, setCurrentSlide] = React.useState(1);
  const handleNext = () => {
    if(currentSlide !== data.length) {
      setCurrentSlide(currentSlide + 1)
    }else if(currentSlide === data.length){
      setCurrentSlide(1);
    }
  };
  const handlePrevious = () => {
    if(currentSlide === 1){
      setCurrentSlide(data.length)
    }else if(currentSlide !==1){
      setCurrentSlide(currentSlide -1)
    }
  };
    return (
        <>
            <section>
                {data.map((item) => (
                    <article key={item.id} className={`grid grid-cols-1 lg:grid-cols-[1fr_26rem] ${item.id !== currentSlide? 'hidden' : ''}`}>
                        <div className="relative">
                            <picture>
                                <source
                                    media="(min-width: 768px )"
                                    srcSet={item.image.desktop}
                                />
                                <Image
                                    src={item.image.mobile}
                                    width={0}
                                    height={0}
                                    alt="photo"
                                    sizes="100vw"
                                    className="w-full h-full"
                                />
                            </picture>
                            <div className="absolute -bottom-2 right-0 lg:-right-24">
                                <button onClick={handlePrevious}>
                                    <Image
                                        src="/images/icon-angle-left.svg"
                                        alt="left button"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-12 h-12 p-2 bg-black hover:bg-neutral-400"
                                    />
                                </button>
                                <button onClick={handleNext}>
                                    <Image
                                        src="/images/icon-angle-right.svg"
                                        alt="left button"
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-12 h-12 p-2 bg-black hover:bg-neutral-400"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col gap-2 items-start lg:justify-center">
                            <h2 className="uppercase text-3xl font-bold text-neutral-900">{item.title}</h2>
                            <p className="text-justify text-slate-800 opacity-75">{item.desc}</p>
                            <div className="flex items-center gap-4 lg:gap-6">
                                <span className="uppercase" style={{letterSpacing: '8px'}}>shop now</span>
                                <Image
                                    src="/images/icon-arrow.svg"
                                    alt="icon"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-10"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
};

export default Showcase;

const data = [
    {
        id: 1,
        title: "Discover innovative ways to decorate",
        desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image: {
            desktop: "/images/desktop-image-hero-1.jpg",
            mobile: "/images/mobile-image-hero-1.jpg",
        },
    },
    {
        id: 2,
        title: "We are available all across the globe",
        desc: "  With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: {
            desktop: "/images/desktop-image-hero-2.jpg",
            mobile: "/images/mobile-image-hero-2.jpg",
        },
    },
    {
        id: 3,
        title: " Manufactured with the best materials",
        desc: "  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: {
            desktop: "/images/desktop-image-hero-3.jpg",
            mobile: "/images/mobile-image-hero-3.jpg",
        },
    },
];
