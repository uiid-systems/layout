export const ax = {
  property: "justify-content",
  values: [
    "around",
    "baseline",
    "between",
    "center",
    "end",
    "evenly",
    "normal",
    "start",
    "stretch",
  ] as const,
};

export const ay = {
  property: "align-items",
  values: ["baseline", "center", "end", "start", "stretch"] as const,
};
