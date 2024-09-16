interface MyButtonProps {
  size: number;
  increaseSize: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const MyButton: React.FC<MyButtonProps> = ({
  size,
  increaseSize,
  className,
  style,
}) => {
  return (
    <button
      onClick={increaseSize}
      className={className}
      style={{
        ...style,
        padding: `${size}px`,
        fontSize: `${size}px`,
      }}
    >
      Esse botão aumenta cada vez que for pressionado
    </button>
  );
};

export default MyButton;
