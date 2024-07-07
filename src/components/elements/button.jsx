import { Button } from "@material-tailwind/react";
 
export function Button(props) {
    const {variant, size, color} = props
  return <Button variant={variant} size={size} color={color}/>;
}