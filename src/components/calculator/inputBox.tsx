import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

function InputBox(props: any) {
  return (
    <div className={`items-top space-x-2 ${props.styles}`}>
      <div className="grid gap-5">
        <div className="grid gap-2 leading-none items-center">
          <Label
            htmlFor="input"
            className="text-base text-[#666] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
          >
            {props.text}
          </Label>
          <Input
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e) =>
              props.onChange ? props.onChange(e.target.value) : null
            }
          />
        </div>
      </div>
      {props.description != undefined && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      )}
    </div>
  );
}

export default InputBox;
