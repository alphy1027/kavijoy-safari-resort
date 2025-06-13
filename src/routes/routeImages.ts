// routeImages.ts
import home1 from "@/assets/images/heroimage.avif";
import home2 from "@/assets/images/heroimage.avif";
import servicesImage from "@/assets/images/heroimage.avif";
import serviceImage from "@/assets/images/heroimage.avif";
import aboutImage from "@/assets/images/heroimage.avif";
import contactImage from "@/assets/images/heroimage.avif";

export const routeImages: Record<string, string[]> = {
  "/": [home1, home2],
  "/services": [servicesImage],
  "/services/:id": [serviceImage],
  "/about": [aboutImage],
  "/contact-us": [contactImage],
};
export const getRouteImages = (path: string): string[] => {
  if (routeImages[path]) return routeImages[path];

  if (/^\/services\/[^/]+$/.test(path)) {
    return routeImages["/services/:id"] || [];
  }

  return [];
};
