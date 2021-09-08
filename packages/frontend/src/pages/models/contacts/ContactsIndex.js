import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Results from "../../../components/crud/Results";
import { isWidthDown, withWidth } from "@material-ui/core";
import { pluralize } from "inflected";
import { useApp } from "../../../AppProvider";
import { DISPLAY_MODES } from "./ContactsConfig";
import { ConfirmDeleteDialog } from "../../../components/crud/ConfirmDeleteDialog";
import IndexAppBar from "../../../components/crud/IndexAppBar";
import { ROUTES } from "../../../constants";
import { useHistory } from "react-router-dom";

function ContactsIndex({ width, modelName }) {
  const app = useApp();
  const history = useHistory();

  const [displayMode, setDisplayMode] = useState(
    localStorage.getItem(`crudViewResultDisplayMode_${modelName}`) ??
      (isWidthDown("xs", width) ? DISPLAY_MODES.LIST : DISPLAY_MODES.TABLE)
  );

  return (
    <div style={{ height: "100%" }}>
      <Helmet title={pluralize(modelName)} />

      <ConfirmDeleteDialog
        modelName={modelName}
        open={app.confirmDialogOpen}
        setOpen={app.setConfirmDialogOpen}
        afterDelete={() => {
          history.push(`${ROUTES.MODEL_CONTACTS}`);
        }}
      />

      <IndexAppBar
        modelName={modelName}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
      />

      <Results modelName={modelName} displayMode={displayMode} />
    </div>
  );
}

export default withWidth()(ContactsIndex);
