import { useLayoutEffect, useRef } from "react";
import { useInView } from "framer-motion";

const DRAWABLE =
  ".draw path, .draw circle, .draw rect, .draw line, .draw polyline, .draw polygon, .draw ellipse";

/**
 * Spread the result onto an element styled with `flexMotion`:
 *   const reveal = useFlexReveal();  <Section {...reveal}>
 * Flips `data-inview` once (never back), so content doesn't re-hide on scroll up.
 *
 * Also measures every `.draw` icon shape inside and stores its length in
 * --stroke-len, so each stroke draws at its real speed (a fixed dasharray makes
 * short strokes lag). Layout effect = measured before first paint, so no flash.
 */
const useFlexReveal = ({ margin = "0px 0px -12% 0px" } = {}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });

  useLayoutEffect(() => {
    ref.current?.querySelectorAll(DRAWABLE).forEach((shape) => {
      shape.style.setProperty(
        "--stroke-len",
        String(Math.ceil(shape.getTotalLength()) + 1),
      );
    });
  }, []);

  return { ref, "data-inview": inView };
};

export default useFlexReveal;
