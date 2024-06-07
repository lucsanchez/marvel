export const getCssVariableValue = (variableName: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    variableName
  );
};
