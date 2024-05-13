type CellProps = {
    content: string;
    onClick: () => void;
    puttable: boolean;
  };
  
  const Cell: React.FC<CellProps> = (props) => {
    return (
      <div
        style={{
            width: "80px",
            height: "80px",
            border: "1px solid black",
            fontSize: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: props.puttable ? "green" : "white",
        }}
        onClick={props.onClick}
      >
        {props.content}
      </div>
    );
  };
  
  export default Cell;