import React from 'react'

export default function ErrB() {
    throw new Error('Not Data Found...');
    return <div>Error Boundary Demo Working.</div>
}