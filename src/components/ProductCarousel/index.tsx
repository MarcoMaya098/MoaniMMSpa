import { PointerEvent, useCallback, useEffect, useRef, useState } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
import {
  Wrapper,
  Toolbar,
  Hint,
  Controls,
  Counter,
  Arrow,
  Track,
  Card,
  Overlay,
  Name,
  Details,
  Description,
  Progress,
  Bar,
} from "./styles";

interface Product {
  id: string;
  title: string;
  content: string;
  icon: string;
}

interface ProductCarouselProps {
  items: Product[];
  t: TFunction;
}

// Horizontal scroll-snap carousel: drag with the mouse, swipe on touch, or use the arrows / arrow keys.
// Hovering (or tapping) a card slides its description up over the photo.
const ProductCarousel = ({ items, t }: ProductCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  const step = () => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return 0;
    return card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0");
  };

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setProgress(max > 0 ? track.scrollLeft / max : 1);
    // The last few cards can't snap to the left edge, so the end of the track counts as the last card.
    const s = step();
    const atEnd = max - track.scrollLeft < 2;
    if (s) setCurrent(atEnd ? items.length : Math.round(track.scrollLeft / s) + 1);
  }, [items.length]);

  useEffect(() => {
    onScroll();
    window.addEventListener("resize", onScroll);
    return () => window.removeEventListener("resize", onScroll);
  }, [onScroll]);

  const go = (direction: 1 | -1) =>
    trackRef.current?.scrollBy({ left: direction * step(), behavior: "smooth" });

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { x: e.clientX, left: trackRef.current.scrollLeft };
    trackRef.current.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current || !trackRef.current) return;
    trackRef.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };

  const endDrag = () => {
    drag.current = null;
    setDragging(false);
  };

  return (
    <Wrapper data-reveal>
      <Toolbar>
        <Hint>{t("productsHint")}</Hint>
        <Controls>
          <Counter>
            {String(current).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </Counter>
          <Arrow type="button" onClick={() => go(-1)} disabled={progress <= 0.01} aria-label={t("carouselPrev")}>
            ←
          </Arrow>
          <Arrow type="button" onClick={() => go(1)} disabled={progress >= 0.99} aria-label={t("carouselNext")}>
            →
          </Arrow>
        </Controls>
      </Toolbar>

      <Track
        ref={trackRef}
        $dragging={dragging}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        tabIndex={0}
        role="region"
        aria-label={t("titleProductContent")}
      >
        {items.map((item, i) => (
          <Card key={item.id} id={item.id} tabIndex={0} style={{ animationDelay: `${Math.min(i, 5) * 90}ms` }}>
            <img src={imagePath(item.icon)} alt={t(item.title)} loading="lazy" draggable={false} />
            <Overlay>
              <Name>{t(item.title)}</Name>
              <Details>
                <Description>{t(item.content)}</Description>
              </Details>
            </Overlay>
          </Card>
        ))}
      </Track>

      <Progress aria-hidden="true">
        <Bar style={{ transform: `scaleX(${Math.max(progress, 0.04)})` }} />
      </Progress>
    </Wrapper>
  );
};

export default withTranslation()(ProductCarousel);
