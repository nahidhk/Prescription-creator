import React from "react";

export default function Table({ tableData }) {

    if (!tableData || tableData.length === 0) {
        return <p>No data found</p>;
    }
    const headers = Object.keys(tableData[0]);

    return (
        <div className="table_component" role="region" tabIndex={0}>
            <table>
                <caption>Table 1</caption>

                <thead>
                    <tr>
                        {headers.map((head, i) => (
                            <th key={i}>{head.toUpperCase()}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            {headers.map((key, i) => (
                                <td key={i}>{row[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}