function cleanLeadSourceData(input = {}) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [key, value?.trim()]).filter(([, value]) => Boolean(value))
  );
}
export {
  cleanLeadSourceData as c
};
