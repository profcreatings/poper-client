import { io } from 'socket.io-client';

export const socket = io(new URL(import.meta.env.VITE_API_URL).origin, {
    autoConnect: false,
});
