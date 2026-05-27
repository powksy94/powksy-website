interface Props {
  icon: React.ElementType
  label: string
  active: boolean
  onClick: () => void
  badge?: number
}

export default function NavItem({ icon: Icon, label, active, onClick, badge }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all text-left"
      style={{
        backgroundColor: active ? '#7B00D420' : 'transparent',
        color: active ? '#C4A8E0' : '#7B5590',
        border: active ? '1px solid #7B00D430' : '1px solid transparent',
      }}
    >
      <Icon size={15} />
      <span className="flex-1">{label}</span>
      {badge !== undefined && (
        <span className="text-xs font-medium px-1.5 py-0.5 rounded-full" style={{ backgroundColor: '#7B00D4', color: 'white' }}>
          {badge}
        </span>
      )}
    </button>
  )
}
