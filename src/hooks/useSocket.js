import { useEffect } from 'react';
import { socket } from '../socket.js';

export const useSocket = ({ handlers }) => {
    useEffect(() => {
        socket.connect();

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        Object.entries(handlers).forEach(([event, handler]) =>
            socket.on(event, handler),
        );

        return () => {
            Object.entries(handlers).forEach(([event, handler]) =>
                socket.off(event, handler),
            );
        };
    }, [handlers]);
};
