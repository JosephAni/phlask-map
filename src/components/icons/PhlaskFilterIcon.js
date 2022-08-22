// Returns the filter icon in URI encoded svg format

export default (type, width = 40, height = 40) => {
  const color = () => {
    switch (type) {
      case 'Public':
        return '#27aae1';
      case 'Private':
        return '#f4d411';
      case 'Restricted':
        return '#cd3642';
      case 'Private-Shared': // fall through
      case 'Semi-public':
        return '#2ab673';
      default:
        return '#b0b0b0';
    }
  };

  return (
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 279 279">
  <circle cx="139.5" cy="139.5" r="133.5" fill="#fff" stroke="${color()}" stroke-linejoin="round" stroke-width="12"/>
  <path d="M178.11,182.88c-1.12-6-3.65-11.46-6.17-16.42-7.58-15.14-16.7-28.89-25.69-41.61l-1.12-1.79c-1.54-2.16-3.37-3.3-5.48-3.3-3.08,0-5,2.54-5.6,3.3v.13l-2,2.8c-3.51,5.09-7.16,10.44-10.67,15.78-5.47,8.4-12.36,19.6-17.4,31.56-1.69,3.95-3.23,7.89-3.37,12.22-.56,11.2,3.93,20.61,13.19,28a41.23,41.23,0,0,0,25.68,8.91h0c13.76,0,26.25-6.36,33.41-17.18C177.69,198.15,179.52,190.51,178.11,182.88Z" 
  fill="#fff"/><path d="M178.11,182.88c-1.12-6-3.65-11.46-6.17-16.42-7.58-15.14-16.7-28.89-25.69-41.61l-1.12-1.79c-1.54-2.16-3.37-3.3-5.48-3.3-3.08,0-5,2.54-5.6,3.3v.13l-2,2.8c-3.51,5.09-7.16,10.44-10.67,15.78-5.47,8.4-12.36,19.6-17.4,31.56-1.69,3.95-3.23,7.89-3.37,12.22-.56,11.2,3.93,20.61,13.19,28a41.23,41.23,0,0,0,25.68,8.91h0c13.76,0,26.25-6.36,33.41-17.18C177.69,198.15,179.52,190.51,178.11,182.88Zm-9.68,20c-6.18,9.42-17,14.89-28.92,14.89a35.78,35.78,0,0,1-22.31-7.63c-8-6.36-11.94-14.64-11.5-24.31.13-3.56,1.4-7,3.08-10.69,4.91-11.7,11.65-22.65,17-30.92,3.37-5.22,7-10.57,10.67-15.65l1.82-2.68c0-.13.15-.13.15-.25a4.71,4.71,0,0,1,1.11-1.15s.42.13,1.13,1.15l1.12,1.65c8.7,12.47,17.83,26.09,25.26,41,2.38,4.83,4.77,9.93,5.75,15.27C174.18,190.13,172.64,196.62,168.43,202.85ZM142,205.65a2.42,2.42,0,0,1-2.53,2.3c-12.77,0-23-9.42-23-20.88a2.54,2.54,0,0,1,5.06,0c.13,8.91,8.13,16.17,17.95,16.17A2.5,2.5,0,0,1,142,205.65Z" 
  fill="${color()}"/><path d="M111.08,61.68,132,60.09a6.91,6.91,0,0,0,5.81,3.16h3.61a6.91,6.91,0,0,0,5.81-3.16l20.89,1.59a5.37,5.37,0,0,0,0-10.7L147.2,52.57a6.91,6.91,0,0,0-5.81-3.16h-3.61A6.91,6.91,0,0,0,132,52.57L111.08,51a5.37,5.37,0,0,0,0,10.7Z" 
  fill="${color()}"/><path d="M193.34,97.36c0-11.1-9-21.34-20.1-21.34h-23.1v-3.9c0-3.66-4.73-6.62-10.56-6.62S129,68.46,129,72.12V76H106.46c-11.1,0-20.1,10.24-20.1,21.34-9.07,0-17,7.82-17,17.46V144H85.82c9.07,0,16.43-7.81,16.43-17.45v-.84a15.05,15.05,0,0,1,15-15.05h11a13.77,13.77,0,0,1,22.49,0h10.95a15.05,15.05,0,0,1,15.06,15.05l.08.84c0,9.64,7.35,17.45,16.42,17.45h16.43V114.82C209.77,105.18,202.42,97.36,193.34,97.36Z" 
  fill="${color()}"/></svg>`)
  );
};
