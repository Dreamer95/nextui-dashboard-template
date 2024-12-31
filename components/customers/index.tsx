'use client';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { DotsIcon } from '@/components/icons/accounts/dots-icon';
import { HouseIcon } from '@/components/icons/breadcrumb/house-icon';
import { UsersIcon } from '@/components/icons/breadcrumb/users-icon';
import { TableWrapper } from '@/components/table/table';
import { AddUser } from './add-user';
import { randomTextUnique } from '@/helpers/utils';

const columns = [
  { name: 'Họ tên', uid: 'fullName' },
  { name: 'Email', uid: 'email' },
  { name: 'Số điện thoại', uid: 'phoneNumber' },
  { name: 'Địa chỉ', uid: 'address' },
  { name: 'Trạng thái', uid: 'status' },
  { name: 'Hành động', uid: 'actions' },
];

export const Customers = () => {
  const [list, setList] = React.useState<Record<string, any>[]>([]);
  const handleSubmitForm = (data: Record<string, any>) => {
    console.log('Class: , Function: handleSubmitForm, Line 22 data(): ', data);
    setList((prevState) => [
      ...prevState,
      {
        ...data,
        status: 'success',
        id: randomTextUnique(8),
      },
    ]);
  };

  return (
    <div className="my-10 px-4 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <ul className="flex">
        <li className="flex gap-2">
          <HouseIcon />
          <Link href={'/'}>
            <span>Home</span>
          </Link>
          <span> / </span>{' '}
        </li>

        <li className="flex gap-2">
          <UsersIcon />
          <span>Users</span>
          <span> / </span>{' '}
        </li>
        <li className="flex gap-2">
          <span>List</span>
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Danh sách khách hàng</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 md:flex-nowrap">
          <Input
            classNames={{
              input: 'w-full',
              mainWrapper: 'w-full',
            }}
            placeholder="Tìm kiếm"
          />
          {/*<SettingsIcon />*/}
          {/*<TrashIcon />*/}
          {/*<InfoIcon />*/}
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddUser handleSubmitForm={handleSubmitForm} />
          {/*<Button color="primary" startContent={<ExportIcon />}>*/}
          {/*  Export to CSV*/}
          {/*</Button>*/}
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper data={list} columns={columns} />
      </div>
    </div>
  );
};
