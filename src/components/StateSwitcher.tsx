export default function StateSwitcher({
  handleClick,
}: {
  handleClick: (state: string) => void;
}) {
  let states = ["default", "warning", "danger"];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "5px",
        borderBottom: "2px solid #f4f4f4",
      }}
    >
      {states.map((state) => {
        return (
          <button
            style={{
              backgroundColor: "#f4f4f4",
              padding: "4px",
              marginBottom: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              textTransform: 'capitalize',
            }}
            onClick={() => handleClick(state)}
          >
            {state}
          </button>
        );
      })}
    </div>
  );
}
