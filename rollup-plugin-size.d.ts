declare const size: (options: {
  compression: "none" | "gzip" | "brotli";
  pattern: string;
  exclude: string;
  filename: string;
  writFile: boolean;
  stripHash: (file: string) => string
}) => {name: string; generateBundle: ({}) => void;};

export default size;