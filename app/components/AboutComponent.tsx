import Image from "next/image";
import React from "react";

const AboutComponent = () => {
    return (
        <>
            <section>
                <article className="grid grid-cols-1 lg:grid-cols-[20rem_1fr_20rem]">
                    <div>
                        <Image
                            src="/images/image-about-dark.jpg"
                            alt="about dark"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority

                        />
                    </div>
                    <div className="flex flex-col gap-4 p-8 lg:p-12">
                        <h2 className="uppercase text-2xl lg:text-3xl">About our furniture</h2>
                        <p className="text-justify text-slate-800 opacity-75">
                            Our multifunctional collection blends design and
                            function to suit your individual taste. Make each
                            room unique, or pick a cohesive theme that best
                            express your interests and what inspires you. Find
                            the furniture pieces you need, from traditional to
                            contemporary styles or anything in between. Product
                            specialists are available to help you create your
                            dream space.
                        </p>
                    </div>
                    <div>
                        <Image
                            src="/images/image-about-light.jpg"
                            alt="about dark"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full"
                            priority
                        />
                    </div>
                </article>
            </section>
        </>
    );
};

export default AboutComponent;
