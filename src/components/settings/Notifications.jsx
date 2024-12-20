import { useState } from 'react';
import SettingSection from './SettingSection';
import ToggleSwitch from './ToggleSwitch';
import { Bell } from 'lucide-react';
import { NOTIFICATION_OPTIONS } from '../../data/SidebarItems';

export default function Notifications() {
  const [notifications, setNotifications] = useState({
    push: false,
    email: false,
    sms: true,
  });

  return (
    <SettingSection icon={Bell} title={'Notifications'}>
      {NOTIFICATION_OPTIONS.map(({ key, label }) => (
        <ToggleSwitch
          key={key}
          label={label}
          isOn={notifications[key]}
          onToggle={() =>
            setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
          }
        />
      ))}
    </SettingSection>
  );
}
