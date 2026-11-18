import type { ReactNode } from "react";

interface Props {
    title?: string
    children: ReactNode
}

export default function Panel({ title, children }: Props) {
    return (
        <section className="rounded-2xl p-4 md:p-5 border" style={{ backgroundColor: '#110018', borderColor: '#7B00D420' }}>
            {title && <h2 className="text-sm font-medium mb-4" style={{ color: '#9B7DB8' }}>{title}</h2>}
            {children}
        </section>
    )
}