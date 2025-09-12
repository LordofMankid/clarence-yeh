interface LinkIconsProps {
  altStyle?: string;
  altContainerStyle?: string;
}
export default function LinkIcons(props: LinkIconsProps) {
  const { altStyle, altContainerStyle } = props;
  return (
    <div className={`flex ${altContainerStyle ? altContainerStyle : ""}`}>
      <a href="https://github.com/lordofmankid" target="_blank">
        <img
          src="/assets/non-svg-icons/github_colored.png"
          className={`m-0 ${altStyle ? altStyle : ""}`}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/clarence-yeh-431613222"
        target="_blank"
      >
        <img
          src="/assets/non-svg-icons/linkedin_colored.png"
          className={`m-0 ${altStyle ? altStyle : ""}`}
        />
      </a>
      <a href="https://www.youtube.com/@itsclarence7685" target="_blank">
        <img
          src="/assets/non-svg-icons/youtube_colored.png"
          className={`m-0 ${altStyle ? altStyle : ""}`}
        />
      </a>
    </div>
  );
}
