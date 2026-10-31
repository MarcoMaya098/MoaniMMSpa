// Outline flower ornament used in the page margins and footer; drawn with currentColor.
const ring = (count: number, offset = 0) =>
  Array.from({ length: count }, (_, i) => offset + (360 / count) * i);

const INNER_PETAL = "M0,-17 C11,-28 11,-44 0,-54 C-11,-44 -11,-28 0,-17Z";
const OUTER_PETAL = "M0,-38 C17,-50 20,-70 0,-86 C-20,-70 -17,-50 0,-38Z";
const SMALL_PETAL = "M0,-58 C7,-62 7,-71 0,-76 C-7,-71 -7,-62 0,-58Z";

interface MandalaProps {
  className?: string;
}

const Mandala = ({ className }: MandalaProps) => (
  <svg className={className} viewBox="-100 -100 200 200" aria-hidden="true" focusable="false">
    <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle r="7" />
      <circle r="13" />
      {ring(8).map((a) => (
        <g key={`i${a}`} transform={`rotate(${a})`}>
          <path d={INNER_PETAL} />
          <path d="M0,-23 L0,-46" />
        </g>
      ))}
      {ring(8, 22.5).map((a) => (
        <g key={`o${a}`} transform={`rotate(${a})`}>
          <path d={OUTER_PETAL} />
          <path d="M0,-46 C7,-56 7,-68 0,-77 C-7,-68 -7,-56 0,-46Z" />
        </g>
      ))}
      {ring(8).map((a) => (
        <path key={`s${a}`} d={SMALL_PETAL} transform={`rotate(${a})`} />
      ))}
      {ring(24).map((a) => (
        <circle key={`d${a}`} cx="0" cy="-94" r="2.2" transform={`rotate(${a})`} />
      ))}
    </g>
  </svg>
);

export default Mandala;
