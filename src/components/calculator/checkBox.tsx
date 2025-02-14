import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function CheckBox(props: any) {
  const listItems = props.items.map((item: any) => (
    <div className="flex" key={item.id}>
      <div className="flex gap-2 leading-none  items-center">
        <Checkbox
          id={item.id}
          checked={item.checked}
          onCheckedChange={(e) =>
            item.onCheckedChange ? item.onCheckedChange(e) : null
          }
          className="data-[state=checked]:bg-[#186EC4] border-[#186EC4]"
        />
        <Label
          htmlFor={item.id}
          className="text-xl text-[#666] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
        >
          {item.text}
        </Label>
      </div>
    </div>
  ));
  return (
    <div className={`items-top space-x-2 ${props.styles}`}>
      <div className="grid gap-5">{listItems}</div>
      {props.description != undefined && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      )}
    </div>
  );
}

export default CheckBox;
