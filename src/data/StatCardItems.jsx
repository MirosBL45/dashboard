import {
  BarChart2,
  ShoppingBag,
  Users,
  Zap,
  Package,
  TrendingUp,
  AlertTriangle,
  DollarSign,
  UsersIcon,
  UserPlus,
  UserCheck,
  UserX,
  CreditCard,
  ShoppingCart,
  CheckCircle,
  Clock,
} from 'lucide-react';

export const STATCARD_ITEMS_OVP = [
  { name: 'Total Sales', icon: Zap, value: '$12,345', color: '#6366f1' },
  { name: 'New Users', icon: Users, value: '1,234', color: '#8B5CF6' },
  { name: 'Total Products', icon: ShoppingBag, value: '567', color: '#EC4899' },
  {
    name: 'Conversion Rate',
    icon: BarChart2,
    value: '12.5%',
    color: '#10B981',
  },
];

export const STATCARD_ITEMS_PDP = [
  { name: 'Total Products', icon: Package, value: '$12,345', color: '#2088e9' },
  { name: 'Top Selling', icon: TrendingUp, value: '1,234', color: '#d87110' },
  { name: 'Low Stock', icon: AlertTriangle, value: '567', color: '#9f0f0f' },
  { name: 'Total Revenue', icon: DollarSign, value: '12.5%', color: '#23ec0d' },
];

export const USER_STATS_UP = [
  { name: 'Total Users', icon: UsersIcon, value: 152845, color: '#6366F1' },
  { name: 'New Users Today', icon: UserPlus, value: 243, color: '#10B981' },
  { name: 'Active Users', icon: UserCheck, value: 98520, color: '#F59E0B' },
  { name: 'Churn Rate', icon: UserX, value: '2.4%', color: '#EF4444' },
];

export const SALES_STATS_SP = [
  {
    name: 'Total Revenue',
    icon: CreditCard,
    value: '$1,234,567',
    color: '#6366F1',
  },
  {
    name: 'Average Order Value',
    icon: DollarSign,
    value: '$78.90',
    color: '#10B981',
  },
  {
    name: 'Conversion Rate',
    icon: ShoppingCart,
    value: '3.45%',
    color: '#F59E0B',
  },
  { name: 'Sales Growth', icon: TrendingUp, value: '12.3%', color: '#EF4444' },
];

export const ORDER_STATS_OP = [
  {
    name: 'Total Orders',
    icon: ShoppingBag,
    value: '1,234',
    color: '#6366F1',
  },
  {
    name: 'Pending Orders',
    icon: Clock,
    value: '56',
    color: '#EF4444',
  },
  {
    name: 'Completed Orders',
    icon: CheckCircle,
    value: '1,178',
    color: '#10B981',
  },
  {
    name: 'Total Revenue',
    icon: DollarSign,
    value: '$98,765',
    color: '#F59E0B',
  },
];
