import React from "react";

import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";

import Tooltip from "@material-ui/core/Tooltip";

import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";

import SaveIcon from "@material-ui/icons/Save";
import SendIcon from "@material-ui/icons/Send";

export default function Tools() {
  return (
    <Toolbar  disableGutters={true} variant="dense">
      <Tooltip title="DELETE">
        <Button
          //variant="contained"
          color="secondary"
          //className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Tooltip>

      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Tooltip title="SEND">
        <Button
          //variant="contained"
          color="primary"
          //className={classes.button}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Tooltip>
      <Tooltip title="UPLOAD">
        <Button
          //variant="contained"
          color="default"
          // className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      </Tooltip>

      <Tooltip title="TALK">
        <Button
          //variant="contained"
          //disabled
          color="secondary"
          //className={classes.button}
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
      </Tooltip>
      <Tooltip title="SAVE">
        <Button
          //variant="contained"
          color="primary"
          //size="small"
          //className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Tooltip>
    </Toolbar>
  );
}
