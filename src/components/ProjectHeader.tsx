import "../styles/BackButton.scss";

export default function ProjectHeader() {
  const styles = {
    buttonContainer: {
      marginTop: 100,
      marginBottom: 63,
      width: 150,
      height: 60,
      cursor: "pointer",
    },
  };

  const handleClick = () => {
    console.log("hi");
    // Check if the user is already on the home page
    if (window.location.pathname === "/" || window.history.length === 1) {
      // Navigate to the home page if there's no history or already at '/'
      window.location.href = "/";
    } else {
      // Otherwise, go back to the previous page
      window.history.back();
    }
  };
  return (
    <div
      className="project-back-button-container"
      style={styles.buttonContainer}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M497.333 239.999H80.092l95.995-95.995l-22.627-22.627L18.837 256L153.46 390.623l22.627-22.627l-95.997-95.997h417.243z"
        ></path>
      </svg>
      <div>Back</div>
    </div>
  );
}
