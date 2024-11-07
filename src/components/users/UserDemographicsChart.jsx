import CategoryChart from '../common/CategoryChart';
import { USER_DEMOGRAPHIC_DATA } from '../../data/ChartsData';

export default function UserDemographicsChart() {
  return (
    <CategoryChart
      CATEGORY_DATA={USER_DEMOGRAPHIC_DATA}
      title="User Demographics"
      transitionDelay={0.5}
    />
  );
}
