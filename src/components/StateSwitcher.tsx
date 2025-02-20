export default function StateSwitcher({
  handleClick,
 
}: {
  handleClick: (state: string) => void
  
}) {
  return (
    <div
      style={{
        width: "100%",
        padding: "35px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "5px",
      }}
    >
      <button onClick={() => handleClick("default")}>Default</button>
      <button onClick={() => handleClick("warning")}>Warning</button>
      <button onClick={() => handleClick("danger")}>Danger</button>
    </div>
  );
}
