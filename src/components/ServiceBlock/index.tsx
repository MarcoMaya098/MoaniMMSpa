import { useEffect, useRef } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { imagePath } from "../../common/SvgIcon";
import { revealDelay } from "../../common/Reveal";
import { Section, Media, Curtain, Zoom, Body, Index, Title, Rule, Text } from "./styles";

// Each block opens its image differently so a long page never repeats the same motion back to back.
const IMAGE_REVEALS = ["clip", "clip-circle", "clip-left", "zoom", "clip-right"];

interface ServiceBlockProps {
  title: string;
  content: string;
  icon: string;
  id: string;
  // 1-based position in its group, shown as "01", "02"…; odd/even also alternates the image side.
  index: number;
  t: TFunction;
}

const ServiceBlock = ({ title, content, icon, id, index, t }: ServiceBlockProps) => {
  const reverse = index % 2 === 0;
  // Text drifts in from the image's side on every third block, and rises on the others.
  const textReveal = index % 3 === 0 ? (reverse ? "right" : "left") : "up";
  const curtainRef = useRef<HTMLDivElement>(null);

  // Parallax: while the block is on screen, the photo drifts up to ±6% against the scroll.
  useEffect(() => {
    const el = curtainRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2) / window.innerHeight - 0.5;
      el.style.setProperty("--parallax", `${Math.max(-1, Math.min(1, offset)) * 6}%`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    let listening = false;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !listening) {
        window.addEventListener("scroll", onScroll, { passive: true });
        listening = true;
        update();
      } else if (!entry.isIntersecting && listening) {
        window.removeEventListener("scroll", onScroll);
        listening = false;
      }
    });
    io.observe(el.parentElement ?? el);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section id={id} $reverse={reverse}>
      <Media data-reveal={IMAGE_REVEALS[(index - 1) % IMAGE_REVEALS.length]}>
        <Curtain ref={curtainRef}>
          <Zoom>
            <img src={imagePath(icon)} alt={t(title)} loading="lazy" />
          </Zoom>
        </Curtain>
      </Media>
      <Body>
        <Index data-reveal={textReveal} style={revealDelay(200)}>
          {String(index).padStart(2, "0")}
        </Index>
        <Title data-reveal={textReveal} style={revealDelay(280)}>
          {t(title)}
        </Title>
        <Rule data-reveal="line" style={revealDelay(520)} />
        <Text data-reveal={textReveal} style={revealDelay(380)}>
          {t(content)}
        </Text>
      </Body>
    </Section>
  );
};

export default withTranslation()(ServiceBlock);
