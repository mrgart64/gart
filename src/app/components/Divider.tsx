interface DividerProps {
    label?: string;
    className?: string;
}

export default function Divider({ label, className = '' }: DividerProps) {
    if (!label) {
        return (
            <div
                role="separator"
                className={`max-w-7xl mx-4 xl:mx-auto my-2 border-t border-neutral-300 ${className}`}
            />
        );
    }

    return (
        <div
            role="separator"
            className={`max-w-7xl mx-4 xl:mx-auto my-2 flex items-center gap-4 ${className}`}
        >
            <div className="flex-1 border-t border-neutral-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-700 select-none">
                {label}
            </span>
            <div className="flex-1 border-t border-neutral-400" />
        </div>
    );
}