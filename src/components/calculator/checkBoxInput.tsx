import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

function CheckBoxInput(props: any) {
  const listItems = props.items.map((item: any) => (
    <div
      className="grid grid-cols-2 gap-w leading-none items-center"
      key={item.id}
    >
      <div className="flex gap-2 items-center">
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
      <Input
        className="w-[50px] h-[30px] bg-[#f8f8f8] border border-[#ccc] rounded-sm p-2"
        placeholder={item.default}
        value={item.value}
        onChange={(e) =>
          item.onCheckedChange ? item.onChange(e.target.value) : null
        }
      />
    </div>
  ));
  return (
    <div className={`items-top space-x-2 ${props.styles}`}>
      <div className="grid gap-5">{listItems}</div>
      {props.description != undefined && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground italic">
            {props.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default CheckBoxInput;
