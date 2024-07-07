import { Input as MaterialInput } from "@material-tailwind/react";
 
export function Input(props) {
    const {variant, type, label} = props

  return (
      <MaterialInput variant={variant} type= {type} label={label}
      />
  );
}