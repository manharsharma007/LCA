"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

function SliderBar(props: any) {
  const listItems = props.items.map((item: any, index: number) => (
    <div className="grid" key={item.id}>
      <Label
        htmlFor={item.id}
        className="text-xl text-[#666] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium"
      >
        {item.text}
      </Label>
      <div className="flex gap-2 leading-none">
        <Slider
          defaultValue={[item.default]}
          max={item.max}
          value={[item.default]}
          step={item.step}
          color="#186EC4"
          className="w-[300px]"
          onValueChange={(e) =>
            item.onValueChange ? item.onValueChange(e) : null
          }
        />
        <Input
          className="w-[50px] h-[30px] bg-[#f8f8f8] border border-[#ccc] rounded-sm p-2"
          placeholder={item.default}
          onChange={(e) =>
            item.onChange ? item.onChange(e.target.value) : null
          }
        />
      </div>
    </div>
  ));
  return (
    <div className={`items-top space-x-2 ${props.styles}`}>
      <div className="flex gap-5">{listItems}</div>
      {props.description != undefined && (
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      )}
    </div>
  );
}

export default SliderBar;
