import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function RadioButton(props: any) {
  const listItems = props.items.map((item: any) => (
    <div className="flex gap-2 leading-none items-center" key={item.id}>
      <RadioGroupItem
        id={item.id}
        value={item.value}
        onClick={item.onClick}
        checked={item.checked}
        onChange={(e) => (item.onChange ? item.onChange(e) : null)}
        className="border-[#186EC4] [&_svg]:fill-[#186EC4]"
      />
      <Label
        htmlFor={item.id}
        className="text-xl text-[#666] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
      >
        {item.text}
      </Label>
    </div>
  ));
  return (
    <div className={`items-top space-x-2 ${props.styles}`}>
      <RadioGroup defaultValue="" className="flex gap-5">
        {listItems}
      </RadioGroup>
      {props.description != undefined && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      )}
    </div>
  );
}

export default RadioButton;
