import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { revealDelay } from "../../common/Reveal";
import { Bar, Tabs, Pill, Tab } from "./styles";

interface GroupNavProps {
  // Section ids (scroll targets) and the translation key for each tab label.
  groups: { id: string; label: string }[];
  t: TFunction;
}

// Sticky tabs under the header: the pill follows whichever group is on screen, and a click scrolls there.
const GroupNav = ({ groups, t }: GroupNavProps) => {
  const [active, setActive] = useState(0);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // The active group is the last one whose heading has passed 40% of the viewport.
      const line = window.innerHeight * 0.4;
      let current = 0;
      groups.forEach((g, i) => {
        const el = document.getElementById(g.id);
        if (el && el.getBoundingClientRect().top < line) current = i;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [groups]);

  useLayoutEffect(() => {
    const measure = () => {
      const tab = tabRefs.current[active];
      if (tab) setPill({ left: tab.offsetLeft, width: tab.offsetWidth });
    };
    measure();
    // Tab widths change once the web font arrives.
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, t]);

  return (
    <Bar data-reveal style={revealDelay(500)}>
      <Tabs>
        <Pill style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} aria-hidden="true" />
        {groups.map((g, i) => (
          <Tab
            key={g.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            $active={i === active}
            aria-current={i === active ? "true" : undefined}
            onClick={() => document.getElementById(g.id)?.scrollIntoView({ behavior: "smooth" })}
          >
            {t(g.label)}
          </Tab>
        ))}
      </Tabs>
    </Bar>
  );
};

export default withTranslation()(GroupNav);
