export default function getLocalTimezone() {
  const timezone = Intl.DateTimeFormat("en", {
    timeZoneName: "short",
  });
  const temp = timezone.format(new Date()); // -> 01/01/2021, GMT
  const t = temp.split(" "); // -> GMT
  return t[1];
}
