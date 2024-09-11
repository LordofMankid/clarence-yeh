interface SectionTitleProps {
  title: string;
  notBlock?: boolean;
}
export default function SectionTitle(props: SectionTitleProps) {
  const { title, notBlock = false } = props;

  const styles = {
    headerContainer: {
      margin: notBlock ? undefined : "auto",
      marginBlock: notBlock ? 0 : 50,
      width: notBlock ? undefined : "80vw",
      display: "flex",
      flex: notBlock ? 4 : undefined,
    },
    headerCircle: {
      height: 18,
      width: 18,
      borderRadius: 9,
      backgroundColor: "var(--blue-2)",
      boxShadow: "0px 0px 20px var(--blue-3)",
      WebkitBoxShadow: "0px 0px 10px 3px var(--blue-3)", // Vendor prefixes in camelCase
      MozBoxShadow: "0px 0px 20px var(--blue-3)",
    },
  };
  return (
    <div style={styles.headerContainer}>
      <div
        style={{
          display: "flex",
          alignItems: notBlock ? "flex-start" : "center",
          gap: 17,
        }}
      >
        <div style={styles.headerCircle} />
        <p style={{ margin: 0 }}>{title}</p>
      </div>
    </div>
  );
}
