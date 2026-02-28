"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Departments() {
  const router = useRouter();
  const leftRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: leftRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const logoY = useTransform(springScroll, [0, 1], [-120, 120]);

  // CATEGORY MAPPING: Ensure these 'id' values match the keys in your clinicalData/paraClinicalData exactly
  const departmentGroups = [
    { id: "anaesthesiology", cat: "clinical", title: "Anaesthesiology", image: "/images/anaest.jpeg" },
    { id: "anatomy", cat: "pre-clinical", title: "Anatomy", image: "/images/anatomy.jpeg" },
    { id: "biochemistry", cat: "pre-clinical", title: "Biochemistry", image: "/images/biochem.jpeg" },
    { id: "community_medicine", cat: "para-clinical", title: "Community Medicine", image: "/images/comm_med.jpeg" },
    { id: "dermatology", cat: "clinical", title: "Dermatology", image: "/images/derma.jpeg" },
    { id: "forensic_medicine", cat: "para-clinical", title: "Forensic Medicine", image: "/images/fore_med.jpeg" },
    { id: "gen_medicine", cat: "clinical", title: "General Medicine", image: "/images/gen_med.png" },
    { id: "gen_surgery", cat: "clinical", title: "General Surgery", image: "/images/gen_sur.jpeg" },
    { id: "microbiology", cat: "para-clinical", title: "Microbiology", image: "/images/micro.jpeg" },
    { id: "obs_gyn", cat: "clinical", title: "Obstetrics & Gynaecology", image: "/images/obs_gyn.jpeg" },
    { id: "ophthalmology", cat: "clinical", title: "Ophthalmology", image: "/images/ophtha.jpeg" },
    { id: "orthopaedics", cat: "clinical", title: "Orthopaedics", image: "/images/ortho.jpeg" },
    { id: "paediatrics", cat: "clinical", title: "Paediatrics", image: "/images/paediatrics.jpeg" },
    { id: "pathology", cat: "para-clinical", title: "Pathology", image: "/images/patho.jpeg" },
    { id: "pharmacology", cat: "para-clinical", title: "Pharmacology", image: "/images/pharma.jpeg" },
    { id: "physiology", cat: "pre-clinical", title: "Physiology", image: "/images/physiology.jpeg" },
    { id: "psychiatry", cat: "clinical", title: "Psychiatry", image: "/images/psychiatry.jpeg" },
    { id: "radiology", cat: "clinical", title: "Radiology", image: "/images/radio.jpeg" },
    { id: "ent", cat: "clinical", title: "ENT", image: "/images/ent.jpeg" }
  ];

  const handleCardClick = (cat, id) => {
    // Navigates directly to the specific department page
    router.push(`/departments/${cat}/${id}`);
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden font-sans">
      <div className="max-w-[1536px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] items-center gap-8">

          <motion.div ref={leftRef} className="relative min-h-[400px] hidden lg:flex items-center justify-center">
            <motion.div style={{ y: logoY }} className="opacity-60 pointer-events-none w-full flex justify-center">
              <Image src="/images/logo_black.jpeg" alt="Logo" width={600} height={600} className="grayscale mix-blend-multiply w-[110%] max-w-none bg-transparent" priority />
            </motion.div>
          </motion.div>

          <div className="bg-[#0A0B49] rounded-[3rem] shadow-2xl p-8 md:p-12 overflow-hidden border border-white/5">
            <div className="relative">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">Departments of AIMSARC</h2>
                <p className="text-base md:text-lg text-blue-100/70 leading-relaxed italic max-w-2xl border-l-4 border-blue-500 pl-4">
                  Explore our specialized medical wings. Click a card to jump directly to that department's details.
                </p>
              </div>

              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 150, modifier: 1.5, slideShadows: false }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="deptSwiper"
              >
                {departmentGroups.map((group, idx) => (
                  <SwiperSlide key={idx} className="max-w-[260px] md:max-w-[320px] py-10">
                    {({ isActive }) => (
                      <div
                        onClick={() => handleCardClick(group.cat, group.id)}
                        className={`relative h-[400px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden transition-all duration-700 cursor-pointer bg-white/5 backdrop-blur-md border ${isActive ? "scale-105 opacity-100 border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.1)]" : "scale-90 opacity-40 border-white/10"}`}
                      >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-white/10 to-transparent" />
                        <div className="absolute inset-0 z-0">
                          <div className="relative h-full w-full flex items-center justify-center p-8">
                            <Image src={group.image} alt={group.title} fill className={`object-contain transition-transform duration-1000 p-6 ${isActive ? 'scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'scale-95'}`} sizes="(max-width: 768px) 260px, 320px" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B49]/80 via-transparent to-transparent z-10" />
                        </div>
                        <div className="relative z-20 h-full p-8 flex flex-col justify-end text-white text-center">
                          <h3 className="text-lg md:text-xl font-bold leading-tight tracking-wide uppercase">{group.title}</h3>
                          {isActive && <motion.div layoutId="activeDash" className="h-1 w-8 bg-blue-500 mx-auto mt-3 rounded-full" />}
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}