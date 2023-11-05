import "./style.scss";

export const Progress = (props) => {
  const { progress = 23, color = "#5DB921",icon } = props;

  return (
    <div
      class="progress"
      style={{
        background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),
      conic-gradient(${color} ${progress}%, #cccccc4c 0)`,
      }}
    >
      <img src={icon} alt="icon" />
    </div>
  );
};
