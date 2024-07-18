declare const size: (options: {
  compression: "none" | "gzip" | "brotli";
  pattern: string;
  exclude: string;
  filename: string;
  publish: boolean;
  writFile: boolean;
  stripHash: (file: string) => string
}) => {name: string; generateBundle: ({}) => void;};

export default size;