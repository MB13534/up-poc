create table app.contacts
(
    id uuid default uuid_generate_v4() not null
        constraint contacts_pkey
            primary key,
    parent_id uuid,
    former_parent_id uuid,
    status_id integer default 1
        constraint contacts_content_node_statuses_id_fk
            references core.content_node_statuses,
    firstname text,
    lastname text,
    email text,
    phone text,
    address text,
    notes text,
    created_at timestamp default CURRENT_TIMESTAMP,
    created_by uuid,
    updated_at timestamp,
    updated_by uuid,
    deleted_at timestamp,
    deleted_by uuid

);

alter table app.contacts owner to postgres;

create unique index if not exists contacts_id_cindex
    on app.contacts (id);
