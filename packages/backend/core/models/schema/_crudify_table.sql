alter table TOKE_SCHEMA.TOKEN_TABLE_NAME
  add column id uuid default uuid_generate_v4() not null
  constraint TOKEN_TABLE_NAME_pkey
  primary key,
  add column  parent_id uuid,
  add column parent_id uuid,
  add column former_parent_id uuid,
  add column status_id integer default 1
    constraint TOKEN_TABLE_NAME_content_node_statuses_id_fk
      references core.content_node_statuses,
  add column TOKEN_DISPLAY_COLUMN_NAME text,
  add column created_at timestamp default CURRENT_TIMESTAMP,
  add column created_by uuid,
  add column updated_at timestamp,
  add column updated_by uuid,
  add column deleted_at timestamp,
  add column deleted_by uuid
);

alter table TOKEN_SCHEMA.TOKEN_TABLE_NAME owner to postgres;

create unique index if not exists TOKEN_TABLE_NAME_id_cindex
  on TOKEN_SCHEMA.TOKEN_TABLE_NAME (id);
