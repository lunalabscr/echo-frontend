import { type FancyboxOptions } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function useFancybox(options?: Partial<FancyboxOptions>): import("react").Dispatch<import("react").SetStateAction<HTMLElement | null>>[];
