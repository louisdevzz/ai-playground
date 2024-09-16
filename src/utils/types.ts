interface DataItem {
    criteria: string;
    description: string;
    weighting: number;
    poor: string;
    below_average: string;
    average: string;
}

interface Data {
    labels: string[];
    data: DataItem[];
}

interface EditIdx {
    idx: number;
    key: keyof DataItem;
}
