"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FetchDataFromStrapi } from "../../actions/getDataFromStarpi";
import { technologySectionQuery } from "@/lib/queries/homePageQueries";
import { technologiesRoute } from "@/lib/constants/path";
import Image from "next/image";

const TechnologySection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [showImages, setShowImages] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (inView) {
      setShowImages(true);
    }
    const getTechData = async () => {
      try {
        const data = await FetchDataFromStrapi(
          technologySectionQuery,
          technologiesRoute
        );
        setData(data);
      } catch (error) {
        console.error("Error fetching tech data:", error);
      }
    };

    getTechData();
  }, [inView]);

  return (
    <div className="bg-gray-500/20 h-screen">
      <div
        ref={ref}
        className="bg-gray-500/20 h-screen flex items-center justify-center relative"
      >
        <div className="relative w-52 h-52">
          <div
            className={`absolute w-32 h-32 flex flex-col gap-1 items-center justify-center transform transition-all duration-500 ${
              showImages ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: `0ms`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={
                data?.tech?.[0]?.techImage?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data?.tech?.[0]?.techImage?.url}`
                  : "/default-image.png"
              }
              alt={data?.tech?.[0]?.name || "Facebook Image"}
              width={130}
              height={130}
              sizes="100vw"
              priority
              className="w-32 h-32 object-cover rounded-full"
            />
            <p className="text-center text-sm mt-2">{data?.tech?.[0]?.name}</p>
          </div>

          <div
            className={`absolute w-16 h-16 flex flex-col  items-center justify-center transform transition-all duration-500 ${
              showImages ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: `200ms`,
              top: "60%",
              left: "-20%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={
                data?.tech?.[1]?.techImage?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data?.tech?.[1]?.techImage?.url}`
                  : "/default-image.png"
              }
              alt={data?.tech?.[1]?.name || "WhatsApp Image"}
              width={130}
              height={130}
              sizes="100vw"
              priority
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center text-sm mt-2">{data?.tech?.[1]?.name}</p>
          </div>

          <div
            className={`absolute w-16 h-16 flex flex-col items-center justify-center transform transition-all duration-500 ${
              showImages ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: `400ms`,
              top: "-5%",
              left: "5%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={
                data?.tech?.[2]?.techImage?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data?.tech?.[2]?.techImage?.url}`
                  : "/default-image.png"
              }
              alt={data?.tech?.[2]?.name || "Instagram Image"}
              width={130}
              height={130}
              sizes="100vw"
              priority
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center text-sm mt-2">{data?.tech?.[2]?.name}</p>
          </div>

          <div
            className={`absolute w-16 h-16 flex flex-col items-center justify-center transform transition-all duration-500 ${
              showImages ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: `600ms`,
              top: "-5%",
              right: "-25%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={
                data?.tech?.[3]?.techImage?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data?.tech?.[3]?.techImage?.url}`
                  : "/default-image.png"
              }
              alt={data?.tech?.[3]?.name || "Twitter Image"}
              width={130}
              height={130}
              sizes="100vw"
              priority
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center text-sm mt-2">{data?.tech?.[3]?.name}</p>
          </div>

          <div
            className={`absolute w-16 h-16 flex flex-col gap-2 items-center justify-center transform transition-all duration-500 ${
              showImages ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{
              transitionDelay: `800ms`,
              top: "60%",
              right: "-50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={
                data?.tech?.[4]?.techImage?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data?.tech?.[4]?.techImage?.url}`
                  : "/default-image.png"
              }
              alt={data?.tech?.[4]?.name || "LinkedIn Image"}
              width={130}
              height={130}
              sizes="100vw"
              priority
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center text-sm mt-2">{data?.tech?.[4]?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
