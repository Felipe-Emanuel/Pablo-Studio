type ButtonProps = {
  text: string
}

export function Button({text}: ButtonProps) {
  return (
    <button className="
      transition-colors rounded w-full py-4
      text-white hover:bg-secondary/75 bg-secondary"
    >
      {text}
    </button>
  );
}
