import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography
} from "@material-ui/core";
import { Mic, Pause, PlayArrow, Stop } from "@material-ui/icons";
import React, { useRef } from "react";
import ReactPlayer from "react-player/lazy";
import Recorder from "./recorder";

export default function ShadowSection(props: { url: string }) {
  const player = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = React.useState(false);
  const [shadowing, setShadowing] = React.useState(false);
  const [recorderVisible, setRecorderVisible] = React.useState(false);

  const play = () => {
    setPlaying(true);
  };
  const pause = () => {
    setPlaying(false);
  };
  const shadow = () => {
    setRecorderVisible(true);
    setShadowing(true);
  };
  const stop = () => {};

  return (
    <Card variant="outlined">
      <CardMedia>
        <ReactPlayer url={props.url} playing={playing} ref={player} />
      </CardMedia>
      <CardActions disableSpacing>
        <IconButton aria-label="start-shadowing" onClick={shadow}>
          <Mic />
        </IconButton>
        <IconButton aria-label="play" onClick={play}>
          <PlayArrow />
        </IconButton>
        <IconButton aria-label="pause" onClick={pause}>
          <Pause />
        </IconButton>
        <IconButton aria-label="stop" onClick={stop}>
          <Stop />
        </IconButton>
      </CardActions>
      <Collapse in={recorderVisible}>
        <Recorder />
      </Collapse>
    </Card>
  );
}
