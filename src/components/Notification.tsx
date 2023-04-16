import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Notification = () => {
  const [notificationData, setNotificationData] = useState<Record<string, string>>({});

  useEffect(() => {
    const socket = io('https://demo-api.pritamdas.com');
    socket.emit('notification:subscribe');
    socket.on('notification:get', (data) => {
      setNotificationData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Notification Data</h1>
      <ul>
        {
            Object.entries(notificationData).map(([key, value]) => {
                return (
                    <li>{key} : {value}</li>
                )
            })
        }
      </ul>
    </div>
  );
};

export default Notification;
