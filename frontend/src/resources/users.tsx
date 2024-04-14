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
const usersTitle = () => {
  const record = useRecordContext();
  return <span>users {record ? `"${record.name}"` : ''}</span>;
};

export const usersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="name" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <ReadOnlyPasswordField source="password" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const usersEdit = () => (
  <Edit title={<usersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="lastname" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="email" />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput source="password" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const usersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="name" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="lastname" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="email" />
        </Grid>
        <Grid item xs={4}>
          <PasswordInput source="password" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  ,
];
