"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { CheckIcon, Languages } from "lucide-react";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherDropdown({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  function onChange(value: string) {
    const locale = value as Locale;
    setSelectedValue(value);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 max-w-40 border-none bg-slate-900 text-white"
      >
        {/* <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator className="opacity-10" /> */}
        <DropdownMenuRadioGroup value={selectedValue} onValueChange={onChange}>
          {items.map((item) => (
            <DropdownMenuRadioItem
              key={item.value}
              value={item.value}
              className="cursor-pointer !bg-transparent"
            >
              <div className="flex items-center">
                {/* {item.value === selectedValue && (
                  <CheckIcon className="mr-2 h-5 w-5 text-slate-400" />
                )} */}
                <span className="text-slate-300">{item.label}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
