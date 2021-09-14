create table app.addresses
(
  id               uuid      default uuid_generate_v4() not null
    constraint addresses_pkey
      primary key,
  parent_id        uuid,
  former_parent_id uuid,
  status_id        integer   default 1
    constraint addresses_content_node_statuses_id_fk
      references core.content_node_statuses,
  address1         text,
  address2         text,
  city             text,
  state            text,
  zip              text,
  created_at       timestamp default CURRENT_TIMESTAMP,
  created_by       uuid,
  updated_at       timestamp,
  updated_by       uuid,
  deleted_at       timestamp,
  deleted_by       uuid
);

alter table app.addresses
  owner to postgres;

create unique index addresses_id_cindex
  on app.addresses (id);

