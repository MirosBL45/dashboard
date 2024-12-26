import { useState } from 'react';
import { Header } from '../components/common/w-allCommon';
import { Lock } from 'lucide-react';

import {
  Profile,
  Notifications,
  Security,
  ConnectedAccounts,
  DangerZone,
  SettingSection,
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
          <SettingSection icon={Lock} title={'No Account?'}>
            <div className="flex flex-col sm:flex-row items-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  This was wrong?
                </h3>
                <p className="text-gray-400">Do something</p>
              </div>
            </div>
            <button
              onClick={() => {
                setAccDelete(false);
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded 
      transition duration-200"
            >
              Back to Account
            </button>
          </SettingSection>
        )}
      </main>
    </div>
  );
}
