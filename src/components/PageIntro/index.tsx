import { withTranslation, TFunction } from "react-i18next";
import { revealDelay } from "../../common/Reveal";
import { Header, Eyebrow, Title, Word, Lead, Group, Count, GroupTitle, GroupRule } from "./styles";

interface PageIntroProps {
  title: string;
  content: string;
  t: TFunction;
}

// Subpage header: each word of the title rises out of its own mask, then the lead fades in.
const PageIntroBase = ({ title, content, t }: PageIntroProps) => {
  const words = t(title).split(" ");
  return (
    <Header>
      <Eyebrow>Moani Spa</Eyebrow>
      <Title aria-label={t(title)}>
        {words.map((word, i) => (
          <Word key={i} aria-hidden="true" style={{ animationDelay: `${150 + i * 110}ms` }}>
            <span>{word}</span>
          </Word>
        ))}
      </Title>
      <Lead style={{ animationDelay: `${300 + words.length * 110}ms` }}>{t(content)}</Lead>
    </Header>
  );
};

interface GroupHeadingProps {
  title: string;
  id?: string;
  // How many services the group holds, shown as a large outlined number.
  count?: number;
  t: TFunction;
}

// Divider that introduces a group of services (e.g. "Faciales", "Masajes").
const GroupHeadingBase = ({ title, id, count, t }: GroupHeadingProps) => (
  <Group id={id}>
    {count !== undefined && (
      <Count data-reveal="zoom" aria-hidden="true">
        {String(count).padStart(2, "0")}
      </Count>
    )}
    <GroupTitle data-reveal="left" style={revealDelay(120)}>
      {t(title)}
    </GroupTitle>
    <GroupRule data-reveal="line" style={revealDelay(300)} />
  </Group>
);

export const GroupHeading = withTranslation()(GroupHeadingBase);
export default withTranslation()(PageIntroBase);
