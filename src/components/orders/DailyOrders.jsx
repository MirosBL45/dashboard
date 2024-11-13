import ChartWrapper from '../common/ChartWrapper';
import { DAILY_ORDERS_DATA } from '../../data/ChartsData';

export default function DailyOrders() {
  return (
    <ChartWrapper title={'Daily Orders'} transitionDelay={0.2}></ChartWrapper>
  );
}
