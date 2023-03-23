import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default function TestRole() {
  return (
      <React.Fragment>
        <h2 className={'content-block'}>Роли</h2>

        <DataGrid
            className={'dx-card wide-card'}
            dataSource={dataSource as any}
            showBorders={false}
            focusedRowEnabled={true}
            defaultFocusedRowIndex={0}
            columnAutoWidth={true}
            columnHidingEnabled={true}
        >
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />

          <Column dataField={'id'} width={90} hidingPriority={2} />
          <Column
              dataField={'aur_name'}
              width={190}
              caption={'Имя'}
              hidingPriority={8}
          />
          <Column
              dataField={'aur_description'}
              caption={'Описание'}
              hidingPriority={6}
          />
        </DataGrid>
      </React.Fragment>
  )}

const dataSource = {
  store: {
    type: 'odata',
    key: 'Task_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks' // Tasks не менять
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Due_Date',
    'Task_Status',
    'Task_Priority',
    'Task_Completion',
    'ResponsibleEmployee/Employee_Full_Name'
  ]
};

const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];
