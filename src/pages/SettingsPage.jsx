import { useState } from 'react';
import { Header } from '../components/common/w-allCommon';

import {
  Profile,
  Notifications,
  Security,
  ConnectedAccounts,
  DangerZone,
} from '../components/settings/w-allSettings';

export default function SettingsPage() {
  const [accDelete, setAccDelete] = useState(false);

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={'Settings'} />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        {!accDelete ? (
          <>
            <Profile />
            <Notifications />
            <Security />
            <ConnectedAccounts />
            <DangerZone setAccDelete={setAccDelete} />
          </>
        ) : (
          <button
            onClick={() => {
              setAccDelete(false);
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded 
      transition duration-200"
          >
            Back to Account
          </button>
        )}
      </main>
    </div>
  );
}
