"use client"
import { useState, ChangeEvent, FocusEvent } from 'react';

const Table = ({data}:{data: Data}) =>{
    const [editIdx, setEditIdx] = useState<EditIdx | null>(null);
    const [editedValue, setEditedValue] = useState<string>('');
    const [tableData, setTableData] = useState<DataItem[]>(data.data);

    const handleCellClick = (idx: number, key: keyof DataItem) => {
        setEditIdx({ idx, key });
        setEditedValue(tableData[idx][key] as string);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditedValue(e.target.value);
    };

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (editIdx) {
            const { idx, key } = editIdx;
            const updatedData = [...tableData];
            updatedData[idx] = { ...updatedData[idx], [key]: editedValue };
            setTableData(updatedData);
            setEditIdx(null);
        }
    };

    //console.log(tableData)

    return (
        <table className="border border-gray-300">
            <thead>
                <tr>
                    {data.labels.map((label, i) => (
                        <th key={i} className="border border-gray-300 px-4 py-2">{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, idx) => (
                    <tr key={idx}>
                        {Object.keys(row).map((key, i) => (
                            <td
                                key={i}
                                onClick={() => handleCellClick(idx, key as keyof DataItem)}
                                onDoubleClick={() => handleCellClick(idx, key as keyof DataItem)}
                                className="border border-gray-300 px-4 py-2"
                            >
                                {editIdx?.idx === idx && editIdx.key === key ? (
                                    <input className='outline-none border border-gray-200 p-2 rounded-lg'
                                        type="text"
                                        value={editedValue}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        autoFocus
                                    />
                                ) : (
                                    row[key as keyof DataItem]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;