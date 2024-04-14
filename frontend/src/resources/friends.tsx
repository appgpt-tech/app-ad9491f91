//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const friendsTitle = () => {
  const record = useRecordContext();
  return <span>friends {record ? `"${record.userId1}"` : ''}</span>;
};

export const friendsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="userId1" reference="users" />
      <ReferenceField source="userId2" reference="users" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const friendsEdit = () => (
  <Edit title={<friendsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="userId1" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="userId2" reference="users" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const friendsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="userId1" reference="users" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="userId2" reference="users" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput
    source="userId1"
    label="userId1"
    reference="users"
    alwaysOn
  />,
  <ReferenceInput
    source="userId2"
    label="userId2"
    reference="users"
    alwaysOn
  />,
];
