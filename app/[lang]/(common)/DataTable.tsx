import type {ReactElement, Ref} from 'react';
import clsx from 'clsx';

type GetKey<TData> = TData extends object ? keyof TData : never;

export type ColumnDef<T> = {
  id: GetKey<T>;
  header: (args: {accessorKey: GetKey<T>}) => ReactElement;
  cell: (data: T) => ReactElement;
  headerClassName?: string;
  cellClassName?: string;
}[];

type ClassNames = {
  tHead?: string;
  tHeadRow?: string;
  tBody?: string;
  tBodyRow?: string;
};

export type DataTableProps<T> = {
  data: T[];
  onClickRow?: (row: T, index: number) => void;
  columns: ColumnDef<T>;
  className?: string;
  classNames?: ClassNames;
  tBodyRef?: Ref<HTMLTableSectionElement> | null;
};

export function DataTable<T>(props: DataTableProps<T>): ReactElement {
  const {data, columns, onClickRow, tBodyRef} = props;

  return (
    <table className={clsx(['flex-1 self-stretch', props.className])}>
      <thead className={clsx('', props.classNames?.tHead)}>
        <tr
          className={clsx(
            'flex-1 px-1 flex items-center',
            props.classNames?.tHeadRow,
          )}
        >
          {columns.map((column, i) => {
            return (
              <th
                key={`${column}-${i}`}
                className={clsx(
                  (i + 1) % 3 === 0
                    ? 'w-14 max-md:w-12'
                    : `flex-1 ${i === 0 && 'pl-3'}`,
                  'items-center flex',
                  'truncate',
                  column.headerClassName,
                )}
              >
                {column.header({accessorKey: column.id})}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody
        className={clsx(
          'pl-2 py-1 flex-1',
          'flex flex-col justify-center',
          props.classNames?.tBody,
        )}
        ref={tBodyRef}
      >
        {data.map((elm, i) => {
          return (
            <tr
              key={`${elm}-${i}`}
              className={clsx(
                'px-1 cursor-pointer flex-1 flex',
                props.classNames?.tBodyRow,
              )}
              onClick={() => onClickRow?.(elm, i)}
            >
              {columns.map((column, idx) => (
                <td
                  key={column.id.toString()}
                  className={clsx(
                    (idx + 1) % 3 === 0 ? 'w-14 max-md:w-12 pl-2' : 'flex-1',
                    'flex flex-row items-center',
                    column.cellClassName,
                  )}
                >
                  {column.cell(elm)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
