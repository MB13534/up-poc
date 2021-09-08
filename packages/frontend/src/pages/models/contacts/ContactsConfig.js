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
  return `${row.firstname} ${row.lastname}`;
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
      field: "firstname",
      headerName: "First Name",
      width: 150,
    },
    {
      field: "lastname",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 250,
    },
    {
      field: "address",
      headerName: "Address",
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
    name: "First Name",
    key: "firstname",
    required: true,
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 6,
    isOpen: true,
  },
  {
    name: "Last Name",
    key: "lastname",
    required: true,
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 6,
    isOpen: true,
  },
  {
    name: "Email Address",
    key: "email",
    required: true,
    type: CRUD_FIELD_TYPES.EMAIL,
    cols: 12,
    isOpen: true,
  },
  {
    name: "Phone Number",
    key: "phone",
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 12,
    isOpen: true,
  },
  {
    name: "Address",
    key: "address",
    type: CRUD_FIELD_TYPES.TEXT,
    cols: 12,
    isOpen: true,
  },
  {
    name: "Notes",
    key: "notes",
    type: CRUD_FIELD_TYPES.MULTILINE_TEXT,
    cols: 12,
    isOpen: true,
  },
];
