// helper: turn \n into <br />
export const nl2br = (text: string) =>
  text.split("\n").map((p, i) => (
    <span key={i}>
      {p}
      <br />
    </span>
  ));
