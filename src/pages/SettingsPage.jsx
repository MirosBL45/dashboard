import { Header } from '../components/common/w-allCommon';

import {
  Profile,
  Notifications,
  Security,
  ConnectedAccounts,
} from '../components/settings/w-allSettings';

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Settings'} />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
      </main>
    </div>
  );
}
