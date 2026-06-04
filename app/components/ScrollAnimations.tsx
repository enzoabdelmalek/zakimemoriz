"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) e.target.classList.add("is-visible");
                });
            },
            { threshold: 0.12 }
        );

        const timeout = setTimeout(() => {
            document.querySelectorAll(".anim").forEach(el => observer.observe(el));
        }, 60);

        return () => { clearTimeout(timeout); observer.disconnect(); };
    }, [pathname]);

    return null;
}
