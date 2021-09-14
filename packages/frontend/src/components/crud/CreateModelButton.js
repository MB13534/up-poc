import { Button as MuiButton, isWidthUp, withWidth } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import React from "react";
import * as PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

const Button = styled(MuiButton)`
  white-space: nowrap;
  ${(props) => props.theme.breakpoints.down("xs")} {
    width: 40px;
    min-width: 40px;
    height: 34px;

    .MuiButton-startIcon {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

function CreateModelButton(props) {
  const history = useHistory();

  return (
    <Button
      fullWidth={props.fullWidth}
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={() => history.push(`${window.location.pathname}/add`)}
    >
      {isWidthUp("sm", props.width) && "Create"}
      {isWidthUp("md", props.width) && ` ${props.modelName}`}
    </Button>
  );
}

// TODO: dkulak: Decide if you want to use this style of component
CreateModelButton.defaultProps = {
  fullWidth: true,
};

CreateModelButton.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.any,
  modelName: PropTypes.any,
};

export default withWidth()(CreateModelButton);
