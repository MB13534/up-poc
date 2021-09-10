import {
  ActionsRenderer,
  DateFormatter,
  IdRenderer,
  StatusDotRenderer,
  StatusHelpIconRenderer,
} from "../../../components/crud/ResultsRenderers";
import { CRUD_FIELD_TYPES } from "../../../constants";

export const DISPLAY_MODES = {
  TABLE: "TABLE",
  CARD: "CARD",
  LIST: "LIST",
};

export const displayName = (row) => {
  return `${row.name}`;
};

export function columns(modelName) {
  return [
    {
      field: "",
      headerName: "",
      width: 50,
      sortable: false,
      disableColumnMenu: true,
      disableReorder: true,
      filterable: false,
      resizeable: false,
      align: "center",
      renderCell: (params) => {
        return ActionsRenderer(params, modelName);
      },
    },
    {
      field: "content_node_statuses.name",
      renderHeader: StatusHelpIconRenderer,
      width: 20,
      sortable: false,
      disableColumnMenu: true,
      disableReorder: true,
      filterable: false,
      resizeable: false,
      align: "center",
      renderCell: StatusDotRenderer,
    },
    // {
    //   field: "content_node_statuses.name",
    //   headerName: " ",
    //   width: 80,
    //   sortable: false,
    //   disableColumnMenu: true,
    //   disableReorder: true,
    //   filterable: false,
    //   resizeable: false,
    //   renderCell: StatusRenderer,
    // },
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: IdRenderer,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
    },
    {
      field: "elevation",
      headerName: "Elevation",
      width: 250,
    },
    {
      field: "created_at",
      headerName: "Created At",
      width: 250,
      renderCell: DateFormatter,
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      width: 200,
      renderCell: DateFormatter,
    },
  ];
}

export const fields = [
  {
    name: "Name",
    key: "name",
    required: true,
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 6,
    isOpen: true,
  },
  {
    name: "Elevation",
    key: "elevation",
    required: true,
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 6,
    isOpen: true,
  },
  {
    name: "Description",
    key: "description",
    required: true,
    type: CRUD_FIELD_TYPES.MULTILINE_TEXT,
    cols: 12,
    isOpen: true,
  },
];

const data = {
  DISPLAY_MODES,
  displayName,
  columns,
  fields,
};

export default data;
