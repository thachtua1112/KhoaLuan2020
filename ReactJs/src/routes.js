import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Dashboard', name: 'Bảng quản lý', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Hồ sơ nhân viên', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Nhân viên tự cập nhật', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Hồ sơ', component: Tables },

  { path: '/base/tabs', name: 'Hợp đồng', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Quản lý thời gian', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Quản lý ngày nghỉ', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

//new routes
  //nhân sự
  { path: '/nhan-su', name: 'Nhân sự', component:Tooltips,exact: true },
  { path: '/nhan-su/chi-tiet-nhan-vien', name: 'Chi tiết nhân viên', component: Tables },
  { path: '/nhan-su/to-chuc-nhan-su', name: 'Tổ chức nhân sự', component: Tooltips },
  { path: '/nhan-su/nhan-vien-moi', name: 'Tiếp nhận nhân viên mới', component: Switches },
  { path: '/nhan-su/nhan-vien-dang-lam-viec', name: 'Nhân viên đang làm việc', component: ProgressBar },

  //dữ liệu nhân viên
  { path: '/nhan-su/du-lieu-nhan-vien', name: 'Dữ liệu nhân viên',component:Tables, exact: true },
  { path: '/nhan-su/du-lieu-nhan-vien/nhan-vien-dang-ki-nghi-viec', name: 'Nhân viên đăng kí nghỉ việc', component: Popovers },
  { path: '/nhan-su/du-lieu-nhan-vien/nhan-vien-nghi-viec', name: 'Nhân viên nghỉ việc', component: Paginations },
  { path: '/nhan-su/du-lieu-nhan-vien/nhan-vien-huu', name: 'Nhân viên đến tuổi nghỉ hưu', component: Navs },
  { path: '/nhan-su/du-lieu-nhan-vien/trinh-do-chuyen-mon', name: 'Danh sách trình độ chuyên môn', component: Navbars },
  { path: '/nhan-su/du-lieu-nhan-vien/nguoi-than', name: 'Người thân', component: ListGroups },
  //hợp đồng nhân sự
  { path: '/nhan-su/hop-dong', name: 'Hợp đồng',component:Jumbotrons, exact: true },
  { path: '/nhan-su/hop-dong/danh-sach-hop-dong', name: 'Danh sách hợp đồng', component: Jumbotrons },
  { path: '/nhan-su/hop-dong/nhan-vien-chua-co-hop-dong', name: 'Danh sách nhân viên chưa có hợp đồng', component: BasicForms },
  { path: '/nhan-su/hop-dong/hop-dong-het-han', name: 'Danh sách hợp đồng hết hạn', component: Collapses },
  { path: '/nhan-su/hop-dong/phu-luc-hop-dong', name: 'Danh sách phụ lục hợp đồng', component: Carousels },
  { path: '/nhan-su/hop-dong/phu-luc-hop-dong-het-han', name: 'Danh sách phụ lục hợp đồng hết hạn', component: Cards },


];

export default routes;
