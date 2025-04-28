type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  inputRef?: React.Ref<HTMLInputElement>;
};

export default function FormInput({ label, inputRef, ...props }: Props) {
  return (
    <div className="form-group--neumorphic">
      {label && (
        <label htmlFor={props.name} className="label--neumorphic">
          {label}
        </label>
      )}
      <input ref={inputRef} className="input--neumorphic" {...props} />
    </div>
  );
}
