interface SectionTitleProps {
  title: string;
}
export default function SectionTitle(props: SectionTitleProps) {
  const { title } = props;

  const styles = {
    headerContainer: {
      margin: "auto",
      marginBlock: 50,
      width: "80vw",
      display: "flex",
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
      <div style={{ display: "flex", alignItems: "center", gap: 17 }}>
        <div style={styles.headerCircle} />
        <p>{title}</p>
      </div>
    </div>
  );
}
