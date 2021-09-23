import {
  ActionsRenderer,
  DateFormatter,
  IdRenderer,
  StatusDotRenderer,
  StatusHelpIconRenderer,
} from "../../components/crud/ResultsRenderers";
import { CRUD_FIELD_TYPES } from "../../constants";

export const displayName = (row) => {
  return `${row.token_display_name_column}`;
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
    {
      field: "id",
      headerName: "ID",
      width: 100,
      renderCell: IdRenderer,
    },
    {
      field: "token_display_name_column",
      headerName: "Name",
      width: 150,
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
    key: "token_display_name_column",
    required: true,
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 12,
    isOpen: true,
  },
];

const config = {
  displayName,
  columns,
  fields,
};

export default config;
