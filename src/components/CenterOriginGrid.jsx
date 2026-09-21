import { useLayoutEffect, useRef } from "react";
import "./CenterOriginGrid.css";

export default function CenterOriginGrid({
  children,
  className = "",
}) {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const items = Array.from(grid.children).filter(
      (item) => item instanceof HTMLElement
    );

    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      grid.dataset.animation = "reduced";
      return;
    }

    const calculatePositions = () => {
      const gridRect = grid.getBoundingClientRect();

      const gridCenterX =
        gridRect.left + gridRect.width / 2;

      const gridCenterY =
        gridRect.top + gridRect.height / 2;

      const measurements = items.map((item) => {
        const rect = item.getBoundingClientRect();

        const itemCenterX =
          rect.left + rect.width / 2;

        const itemCenterY =
          rect.top + rect.height / 2;

        const fromX = gridCenterX - itemCenterX;
        const fromY = gridCenterY - itemCenterY;

        const distance = Math.sqrt(
          fromX * fromX + fromY * fromY
        );

        return {
          item,
          fromX,
          fromY,
          distance,
        };
      });

      const maxDistance = Math.max(
        ...measurements.map(
          ({ distance }) => distance
        )
      );

      measurements.forEach(
        ({ item, fromX, fromY, distance }) => {
          item.style.setProperty(
            "--center-from-x",
            `${fromX}px`
          );

          item.style.setProperty(
            "--center-from-y",
            `${fromY}px`
          );

          const normalizedDistance =
            maxDistance > 0
              ? distance / maxDistance
              : 0;

          const delay =
            normalizedDistance * 450;

          item.style.setProperty(
            "--center-delay",
            `${delay}ms`
          );
        }
      );
    };

    calculatePositions();

    /*
     * "ready" puts every item into its calculated
     * center-origin starting position.
     *
     * The double requestAnimationFrame ensures the
     * browser registers that starting state before
     * the animation begins.
     */
    grid.dataset.animation = "ready";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        grid.dataset.animation = "play";
      });
    });

    /*
     * Recalculate the center vectors if the grid
     * changes size before the animation begins.
     * This does not replay the animation.
     */
    const resizeObserver = new ResizeObserver(() => {
      if (grid.dataset.animation !== "play") {
        calculatePositions();
      }
    });

    resizeObserver.observe(grid);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className={`center-origin-grid ${className}`}
      data-animation="pending"
    >
      {children}
    </div>
  );
}