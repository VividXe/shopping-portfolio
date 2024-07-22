interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function Button(props: ButtonProps) {
  return (
    <button className="bg-slate-50 text-black px-6 py-2" {...props} />
  );
}

export default Button;
