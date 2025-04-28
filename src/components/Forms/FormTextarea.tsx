type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  inputRef?: React.Ref<HTMLTextAreaElement>;
};

export default function FormTextarea({
  label = 'Please add label',
  inputRef,
  ...props
}: Props) {
  return (
    <div className="form-group--neumorphic">
      <label htmlFor={props.name} className="label--neumorphic">
        {label}
      </label>
      <textarea ref={inputRef} className="input--neumorphic" {...props} />
    </div>
  );
}
