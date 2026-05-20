const AboutMeDescription = ({ paragraphs }) => {
  return (
    <div className="space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  )
}

export default AboutMeDescription
