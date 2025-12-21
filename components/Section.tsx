import Container from "./Container"

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-sm font-medium text-blue-600">{eyebrow}</p>
          ) : null}
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-zinc-600 leading-relaxed">{description}</p>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  )
}
