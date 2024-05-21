import React from 'react';

const DynamicTable = ({ dTable }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>
                            Mouse Click number
                        </td>
                        <td>
                            Reaction Time
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dTable?.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {value / 1000}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DynamicTable;
