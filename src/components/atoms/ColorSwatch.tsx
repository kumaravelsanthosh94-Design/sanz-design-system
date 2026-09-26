type ColorSwatchProps = {
  name: string
  token: string
}

export function ColorSwatch({
  name,
  token,
}: ColorSwatchProps) {
  return (
    <div>
      <div
        style={{
          width: '136px',
          height: '90px',
          background: `var(${token})`,
          borderRadius: '4px',
        }}
      />

      <div>{name}</div>
      <div>{token}</div>
    </div>
  )
}