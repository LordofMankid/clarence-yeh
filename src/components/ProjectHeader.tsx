export default function ProjectHeader() {
  const handleClick = () => {
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
    <div onClick={handleClick}>
      <div>Back</div>
    </div>
  );
}
