import React from 'react';

function sortNumericallyAscending(a: string, b: string): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    return numA - numB;
}

const input: string[] = ['1m', '1.5m', '10m', '2m', '2.5m', '3m'];
const sortedInput = [...input].sort(sortNumericallyAscending);

// Alternative solution
// const sortedInput2 = [...input].sort(
//     (a: string, b: string) => parseFloat(a) - parseFloat(b)
// );
// console.log('output2:', sortedInput2);

export default function QuickSortPage() {
    // test output
    console.log('output:', sortedInput);
    console.log('should equal:');
    console.log(['1m', '1.5m', '2m', '2.5m', '3m', '10m']);
    return (
        <div>
            <h1>Sorted List</h1>

            <ul>
                {sortedInput.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
