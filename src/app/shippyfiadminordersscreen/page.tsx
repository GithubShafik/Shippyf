// sections

import OrdersListView from "./view/orders-list-view";

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: App',
};

export default function OverviewAppPage() {
  return <OrdersListView />;
}
