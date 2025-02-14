import React from 'react';
import { Sidebar } from './sidebar.styles';
import { Avatar, Tooltip } from '@nextui-org/react';
import { CompaniesDropdown } from './companies-dropdown';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { PaymentsIcon } from '../icons/sidebar/payments-icon';
import { BalanceIcon } from '../icons/sidebar/balance-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { CustomersIcon } from '../icons/sidebar/customers-icon';
import { ProductsIcon } from '../icons/sidebar/products-icon';
import { ReportsIcon } from '../icons/sidebar/reports-icon';
import { DevIcon } from '../icons/sidebar/dev-icon';
import { ViewIcon } from '../icons/sidebar/view-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { CollapseItems } from './collapse-items';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { FilterIcon } from '../icons/sidebar/filter-icon';
import { useSidebarContext } from '../layout/layout-context';
import { ChangeLogIcon } from '../icons/sidebar/changelog-icon';
import { usePathname } from 'next/navigation';

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Trang chủ"
              icon={<HomeIcon />}
              isActive={pathname === '/'}
              href="/"
            />
            <SidebarItem
              isActive={pathname === '/customers'}
              title="Quản lý khách hàng"
              icon={<CustomersIcon />}
              href="customers"
            />
            <SidebarItem
              isActive={pathname === '/exim-management'}
              title="Quản lý xuất nhập"
              icon={<ProductsIcon />}
              href="exim-management"
            />
            <SidebarItem
              isActive={pathname === '/repair-management'}
              title="Quản lý sửa chữa"
              icon={<ReportsIcon />}
              href="repair-management"
            />
            <SidebarItem
              isActive={pathname === '/accounts'}
              title="Nhân viên"
              icon={<AccountsIcon />}
              href="accounts"
            />
            <SidebarMenu title="Cài đặt">
              <SidebarItem
                isActive={pathname === '/tax'}
                title="Thuế"
                icon={<BalanceIcon />}
                href="tax"
              />
              <SidebarItem
                isActive={pathname === '/price'}
                title="Giá bán"
                icon={<BalanceIcon />}
                href="price"
              />
            </SidebarMenu>
            {/*<SidebarMenu title="Main Menu">*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === "/payments"}*/}
            {/*    title="Payments"*/}
            {/*    icon={<PaymentsIcon />}*/}
            {/*  />*/}
            {/*  <CollapseItems*/}
            {/*    icon={<BalanceIcon />}*/}
            {/*    items={["Banks Accounts", "Credit Cards", "Loans"]}*/}
            {/*    title="Balances"*/}
            {/*  />*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === '/customers'}*/}
            {/*    title="Quản lý khách hàng"*/}
            {/*    icon={<CustomersIcon />}*/}
            {/*    href="customers"*/}
            {/*  />*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === '/products'}*/}
            {/*    title="Quản lý xuất nhập"*/}
            {/*    icon={<ProductsIcon />}*/}
            {/*  />*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === '/reports'}*/}
            {/*    title="Reports"*/}
            {/*    icon={<ReportsIcon />}*/}
            {/*  />*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === '/accounts'}*/}
            {/*    title="Accounts"*/}
            {/*    icon={<AccountsIcon />}*/}
            {/*    href="accounts"*/}
            {/*  />*/}
            {/*</SidebarMenu>*/}

            {/*<SidebarMenu title="General">*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === "/developers"}*/}
            {/*    title="Developers"*/}
            {/*    icon={<DevIcon />}*/}
            {/*  />*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === "/view"}*/}
            {/*    title="View Test Data"*/}
            {/*    icon={<ViewIcon />}*/}
            {/*  />*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === "/settings"}*/}
            {/*    title="Settings"*/}
            {/*    icon={<SettingsIcon />}*/}
            {/*  />*/}
            {/*</SidebarMenu>*/}

            {/*<SidebarMenu title="Updates">*/}
            {/*  <SidebarItem*/}
            {/*    isActive={pathname === "/changelog"}*/}
            {/*    title="Changelog"*/}
            {/*    icon={<ChangeLogIcon />}*/}
            {/*  />*/}
            {/*</SidebarMenu>*/}
          </div>
          {/*<div className={Sidebar.Footer()}>*/}
          {/*  <Tooltip content={"Settings"} color="primary">*/}
          {/*    <div className="max-w-fit">*/}
          {/*      <SettingsIcon />*/}
          {/*    </div>*/}
          {/*  </Tooltip>*/}
          {/*  <Tooltip content={"Adjustments"} color="primary">*/}
          {/*    <div className="max-w-fit">*/}
          {/*      <FilterIcon />*/}
          {/*    </div>*/}
          {/*  </Tooltip>*/}
          {/*  <Tooltip content={"Profile"} color="primary">*/}
          {/*    <Avatar*/}
          {/*      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"*/}
          {/*      size="sm"*/}
          {/*    />*/}
          {/*  </Tooltip>*/}
          {/*</div>*/}
        </div>
      </div>
    </aside>
  );
};
