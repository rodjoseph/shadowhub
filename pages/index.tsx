import * as React from "react";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import Layout from "../components/layout";
import LinkIcon from "@material-ui/icons/Link";
import ReactPlayer from "react-player";
import ShadowSection from "../components/shadowsection";
import { Container, InputAdornment, TextField, Typography } from "@material-ui/core";

export default function Index() {
  const [url, setUrl] = React.useState<string>("");
  const [urlValid, setUrlValid] = React.useState<boolean>(false);
  const [inputError, setInputError] = React.useState(false);
  const checkUrl = () => {
    setUrlValid(ReactPlayer.canPlay(url));
    console.debug((urlValid ? "Can play " : "Cannot play ") + url);
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Shadow your media!
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <TextField
            fullWidth
            variant="outlined"
            value={url}
            sx={{ paddingBlock: 16 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              )
            }}
            onChange={(event) => {
              setUrl(event.target.value);
              checkUrl();
            }}
            placeholder="Enter URL"
            error={inputError}
          />
          {urlValid ? <ShadowSection url={url} /> : <></>}
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
