import { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import Iconify from "../../config/IconifyConfig";

export type NavigationItem = {
  key: string;
  label: string;
  to?: string;
  icon: string;
  children?: NavigationItem[];
};

const icons = { create: "pajamas:todo-add", list: "typcn:th-list" };

export const navigationMenu: NavigationItem[] = [
  {
    key: "/",
    to: "/",
    label: "Dashboard",
    icon: "streamline:dashboard-circle-solid",
  },

  {
    key: "/b2b",
    to: "/b2b",
    label: "B2B",
    icon: "mdi:briefcase-variant",
    children: [
      {
        key: "/b2b/flight-booking-request",
        to: "/b2b/flight-booking-request",
        label: "Flight Booking Request",
        icon: icons.list,
      },
      {
        key: "/b2b/flight-booking-list",
        to: "/b2b/flight-booking-list",
        label: "Flight Booking List",
        icon: icons.list,
      },
      {
        key: "/b2b/agency-request",
        to: "/b2b/agency-request",
        label: "Agency Request",
        icon: icons.list,
      },
      {
        key: "/b2b/agency-list",
        to: "/b2b/agency-list",
        label: "Agency List",
        icon: icons.list,
      },
      {
        key: "/b2b/hotel-booking-list",
        to: "/b2b/hotel-booking-list",
        label: "Hotel Booking List",
        icon: icons.list,
      },
    ],
  },
  {
    key: "/b2c",
    to: "/b2c",
    label: "B2C",
    icon: "fa6-solid:briefcase-medical",
    children: [
      {
        key: "/b2c/flight-booking-request",
        to: "/b2c/flight-booking-request",
        label: "Flight Booking Request",
        icon: icons.list,
      },
      {
        key: "/b2c/flight-booking-list",
        to: "/b2c/flight-booking-list",
        label: "Flight Booking List",
        icon: icons.list,
      },
      {
        key: "/b2c/user-list",
        to: "/b2c/user-list",
        label: "User List",
        icon: icons.list,
      },
    ],
  },

  {
    key: "/payments",
    to: "/payments",
    label: "Payments",
    icon: "mdi:instant-deposit",
    children: [
      {
        key: "/payments/deposit-request-list",
        to: "/payments/deposit-request-list",
        label: "Deposit Request List",
        icon: icons.list,
      },
      {
        key: "/payments/agency-transaction",
        to: "/payments/agency-transaction",
        label: "Agency Transaction",
        icon: icons.list,
      },
    ],
  },

  {
    key: "/booking-support",
    to: "/booking-support",
    label: "Booking Support",
    icon: "material-symbols:support",
  },
  {
    key: "/configuration",
    to: "/configuration",
    label: "Configuration",
    icon: "hugeicons:configuration-01",
    children: [
      {
        key: "/configuration/hotel-commission",
        to: "/configuration/hotel-commission",
        label: "Hotel Markup",
        icon: icons.list,
      },
      {
        key: "/configuration/airline-commission-set",
        to: "/configuration/airline-commission-set",
        label: "Airline Markup",
        icon: icons.list,
      },
      {
        key: "/configuration/b2c-commission",
        to: "/configuration/b2c-commission",
        label: "B2C Markup",
        icon: icons.list,
      },
      {
        key: "/configuration/block-route",
        to: "/configuration/block-route",
        label: "Black Route",
        icon: icons.list,
      },
      {
        key: "/configuration/airport-list",
        to: "/configuration/airport-list",
        label: "Airport List",
        icon: icons.list,
      },
      {
        key: "/configuration/airline-list",
        to: "/configuration/airline-list",
        label: "Airline List",
        icon: icons.list,
      },
      {
        key: "/configuration/visa-type",
        to: "/configuration/visa-type",
        label: "Visa Type",
        icon: icons.list,
      },
    ],
  },
  {
    key: "/administration",
    to: "/administration",
    label: "Administration",
    icon: "eos-icons:admin",
    children: [
      {
        key: "/administration/users",
        to: "/administration/users",
        label: "Users",
        icon: icons.list,
      },
      {
        key: "/administration/roles",
        to: "/administration/roles",
        label: "Roles",
        icon: icons.list,
      },
      {
        key: "/administration/hidden-commission",
        to: "/administration/hidden-commission",
        label: "Hidden Markup",
        icon: icons.list,
      },
    ],
  },
];

export const renderMenuItem = (
  item: NavigationItem
): Required<MenuProps>["items"][number] => ({
  key: item.key,
  label: item.children ? (
    item.label
  ) : (
    <NavLink
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 600 : "normal",
        };
      }}
      to={String(item.to)}
    >
      {item.label}
    </NavLink>
  ),
  icon: <Iconify icon={item.icon} />,
  ...(item.children && { children: item.children.map(renderMenuItem) }),
  type: "item",
});
