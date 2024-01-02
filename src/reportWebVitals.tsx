type OnPerfEntryFunction = (entry: any) => void;

const reportWebVitals = (onPerfEntry: OnPerfEntryFunction): void => {
    if (onPerfEntry && typeof onPerfEntry === "function") {
        import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;

