import { getCssVariableValue } from "@/ui/utils/cssVariables";

export const SmallFilledHeartIcon = () => {
  const filledColor = getCssVariableValue("--marvel-red");
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.57129 2.37318L3.57129 0.552368L0.571289 2.37318V6.27491L6.57129 11.3905L12.5713 6.27491V2.37318L9.57129 0.552368L6.57129 2.37318Z"
        fill={filledColor}
      />
    </svg>
  );
};
