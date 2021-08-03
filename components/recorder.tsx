import { CardContent, Typography } from "@material-ui/core";
import React from "react";

export interface RecorderProps {
  shadowing?: boolean;
  toggleShadowing?: () => void;
}

export default function Recorder(props: RecorderProps) {
  return (
    <>
      <CardContent>
        <Typography>hi</Typography>
      </CardContent>
    </>
  );
}
