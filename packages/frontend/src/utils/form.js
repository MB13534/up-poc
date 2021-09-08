import { CRUD_FIELD_TYPES } from "../constants";
import * as Yup from "yup";

export function generateSchemaShape(fields) {
  const schemaShape = {};

  fields.forEach((field) => {
    let schema = field.validationSchema || null;

    if (
      [
        CRUD_FIELD_TYPES.TEXT,
        CRUD_FIELD_TYPES.MULTILINE_TEXT,
        CRUD_FIELD_TYPES.EMAIL,
      ].includes(field.type)
    ) {
      schema = Yup.string();
    }

    if (field.type === CRUD_FIELD_TYPES.EMAIL) {
      schema = schema.email("Email must be a valid email address.");
    }
    if (field.required) {
      schema = schema.required("This field is required.");
    } else {
      schema = schema.nullable();
    }

    schemaShape[field.key] = schema;
  });

  return schemaShape;
}
