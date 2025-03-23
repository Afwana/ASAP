"use-client";

import { Radio, RadioChangeEvent } from "antd";
import { CheckboxGroupProps } from "antd/es/checkbox";
import { useState } from "react";

const plainOptions: CheckboxGroupProps<string>["options"] = [
  "Basic Information",
  "Education",
  "Career Objective",
  "Key Skills",
  "Resume/Portfolio",
  "Preferences",
  "Work Experiences",
  "Additional Documents",
];

export default function SideMenus() {
  const [value1, setValue1] = useState("Apple");

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  return (
    <div className="w-1/2">
      <Radio.Group
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          //   color: "#9420CA",
        }}
        options={plainOptions}
        onChange={onChange1}
        value={value1}
      />
    </div>
  );
}
