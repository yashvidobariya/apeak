import { Suspense } from "react";
import ShopClient from "../../components/ShopClient";

export const metadata = {
  title: "Shop — Apeak Product Catalog",
  description:
    "Browse the complete Apeak catalog: 3D press-on nails, clear and white nails, daisy bottles, rabbit bottles, mugs, candy trays, and more.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
          Loading catalog...
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}
