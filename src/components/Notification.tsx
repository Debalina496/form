import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { saveNotification } from '../redux/actions';
import Button from '@mui/material/Button';

const Notification = () => {
  const [notificationData, setNotificationData] = useState<Array<Record<string, string>>>([]);
  const [newNotification, setNewNotification] = useState<Record<string, string>>({});
  const dispatch = useDispatch();
  let notification: any = {};

  const savedNotifications: Array<Record<any, any>> = useSelector((store: Record<any, any>) => store.reducers.notification)

  useEffect(() => {
    const socket = io('https://demo-api.pritamdas.com');
    socket.emit('notification:subscribe');
    socket.on('notification:get', (data) => {
      console.log("calling data", data);
      notification = data;
      dispatch(saveNotification(data));
      setNewNotification(data);
    });
    return () => {
        socket.disconnect();
    };
}, [newNotification]);

  return (
    <div>
      <h1>Notification Data</h1>
        {
          savedNotifications.map((notificationItem: Record<any, any>, index: number) => {
            return (
              <ul>
                {Object.entries(notificationItem)?.map(([key, value]) => <li>{`${key} : ${value}`}</li>)}
              </ul>
            )
          })
        }
    </div>
  );
};

export default Notification;