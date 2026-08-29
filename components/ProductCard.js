"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import SafeImage from "./SafeImage";

export default function ProductCard({ product }) {
  const mainImage = product?.images?.[0];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="product-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      <Link href={"/product/" + product.id} style={{ display: "flex", flexDirection: "column", flexGrow: 1, textDecoration: "none", color: "inherit" }}>
        <div className="product-card-image">
          <SafeImage
            src={mainImage?.src}
            alt={mainImage?.alt || product.title}
            aspectRatio="1 / 1"
          />
          <div className="product-card-badge">{product.category}</div>
        </div>
        <div className="product-card-body">
          <h3 className="product-card-title">{product.title}</h3>
          <p className="product-card-desc">{product.description}</p>
        </div>
        <div className="product-card-footer">
          <div
            className="btn btn-card-action"
            aria-label={`View details for ${product.title}`}
          >
            View Details
            <Icon icon="lucide:arrow-right" width={14} height={14} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
