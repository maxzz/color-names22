export type GroupValues = Record<string, string>;

/**
 * { slate: { 50: "#f8fafc", 100: "#f1f5f9", ... 800: "#1e293b", 900: "#0f172a" }, ... }
 */
export type ColorGroups = Record<string, GroupValues>; // group name -> group values
