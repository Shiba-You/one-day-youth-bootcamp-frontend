export const timeArrange = (date: Date) => {
  const now = new Date(date)
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`
}