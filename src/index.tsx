import React from "react";

export interface HelloProps {
  name: string;
}

export default function Hello({ name }: HelloProps) {
  return <div>Hello {name}!</div>;
}
